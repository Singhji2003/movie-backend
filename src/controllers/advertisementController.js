import Advertisement from "../models/Advertisement.js";
import AdvertisementLink from "../models/AdvertisementLink.js";

export const addAdvertisement = async (req, res) => {
  try {
    const { name, rating, trailerLink, genre, releaseYear, description } =
      req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Poster image is required" });
    }

    const advertisement = await Advertisement.create({
      name,
      rating,
      trailerLink,
      genre,
      releaseYear,
      description,
      posterUrl: req.file.path, // from Cloudinary upload
    });

    res.status(201).json({
      success: true,
      message: "Advertisement added successfully!",
      advertisement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllAdvertisements = async (req, res) => {
  try {
    const advertisements = await Advertisement.find().sort({ createdAt: -1 });
    res.json(advertisements);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;

    const advertisement = await Advertisement.findById(id);

    if (!advertisement) {
      return res.status(404).json({
        success: false,
        message: "Advertisement not found!",
      });
    }

    // If you want to delete image from Cloudinary, tell me — I will add that part too.

    await Advertisement.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "Advertisement deleted successfully!",
    });
  } catch (error) {
    console.error("❌ Delete Advertisement Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addAdvertisementLink = async (req, res) => {
  try {
    const { youtubeLink, title, description } = req.body;

    const advertisement = await AdvertisementLink.create({
      youtubeLink,
      title,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Advertisement Link added successfully!",
      advertisement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAdvertisementLink = async (req, res) => {
  try {
    const { id } = req.params;

    const advertisement = await AdvertisementLink.findById(id);

    if (!advertisement) {
      return res.status(404).json({
        success: false,
        message: "Advertisement not found!",
      });
    }

    // If you want to delete image from Cloudinary, tell me — I will add that part too.

    await AdvertisementLink.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "Advertisement deleted successfully!",
    });
  } catch (error) {
    console.error("❌ Delete Advertisement Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllAdvertisementLinks = async (req, res) => {
  try {
    const advertisements = await AdvertisementLink.find().sort({
      createdAt: -1,
    });
    res.json(advertisements);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
