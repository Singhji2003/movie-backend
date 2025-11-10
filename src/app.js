import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import moviePosterRoutes from "./routes/moviePosterRoutes.js";
import tvSeriesRoutes from "./routes/tvSeriesRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tv-series", tvSeriesRoutes);
app.use("/api/movie-posters", moviePosterRoutes);
app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});
export default app;
