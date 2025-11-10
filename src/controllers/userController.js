import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      dob,
      gender,
      address,
      height,
      weight,
      eyeColor,
      hairColor,
      experience,
      prevWork,
      skills,
      email,
    } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      phoneNumber,
      dob,
      gender,
      address,
      height,
      weight,
      eyeColor,
      hairColor,
      experience,
      prevWork,
      skills,
      email,
    });

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
