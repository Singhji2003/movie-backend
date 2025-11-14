import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;

    // File URLs from Cloudinary
    if (req.files?.professionalHeadshot) {
      body.professionalHeadshot = req.files.professionalHeadshot[0].path;
    }

    if (req.files?.fullBodyShot) {
      body.fullBodyShot = req.files.fullBodyShot[0].path;
    }

    if (req.file) {
      // resume single file
      body.actingResume = req.file.path;
    }

    const user = await User.create(body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    await User.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.error("❌ Delete user error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
