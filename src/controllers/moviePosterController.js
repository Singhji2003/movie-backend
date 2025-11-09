import MoviePoster from "../models/MoviePoster.js";

export const createMoviePoster = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required!" });
    }

    const imageUrl = req.file.path;

    const poster = await MoviePoster.create({
      title,
      category,
      description,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Movie poster added successfully!",
      poster,
    });
  } catch (error) {
    console.error("❌ Create Poster Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllPosters = async (req, res) => {
  try {
    const posters = await MoviePoster.find().sort({ createdAt: -1 });
    res.json(posters);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
