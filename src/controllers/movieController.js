import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
  try {
    const { name, rating, trailerLink, genre, releaseYear, description } =
      req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Poster image is required" });
    }

    const movie = await Movie.create({
      name,
      rating,
      trailerLink,
      genre,
      releaseYear,
      description,
      posterUrl: req.file.path, // from Cloudinary upload
    });

    res
      .status(201)
      .json({ success: true, message: "Movie added successfully!", movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
