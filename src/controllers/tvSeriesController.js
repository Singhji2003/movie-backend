import TVSeries from "../models/TvSeries.js";

// Add new series
export const addTVSeries = async (req, res) => {
  try {
    const {
      name,
      rating,
      trailerLink,
      genre,
      startYear,
      numberOfSeasons,
      status,
      description,
    } = req.body;

    const imageUrl = req.file.path;
    const newSeries = new TVSeries({
      name,
      rating,
      trailerLink,
      genre,
      startYear,
      numberOfSeasons,
      status,
      description,
      poster: imageUrl,
    });

    await newSeries.save();
    res
      .status(201)
      .json({ message: "TV Series added successfully", data: newSeries });
  } catch (error) {
    console.error("Error adding series:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all series
export const getAllTVSeries = async (req, res) => {
  try {
    const series = await TVSeries.find().sort({ createdAt: -1 });
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: "Error fetching series" });
  }
};
