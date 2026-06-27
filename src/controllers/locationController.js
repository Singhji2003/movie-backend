import Location from "../models/location.js";

// Add a new location
export const addLocation = async (req, res) => {
  try {
    const { city, state, usedas } = req.body;

    // Handle multiple image uploads
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => file.path);
    }

    const newLocation = new Location({
      city,
      state,
      usedas,
      images,
    });

    const savedLocation = await newLocation.save();

    res.status(201).json({
      success: true,
      message: "Location added successfully",
      location: savedLocation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add location",
      error: error.message,
    });
  }
};

// Get all locations
export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      locations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve locations",
      error: error.message,
    });
  }
};

// Get location by ID
export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      location,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve location",
      error: error.message,
    });
  }
};

// Delete a location
export const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLocation = await Location.findByIdAndDelete(id);

    if (!deletedLocation) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Location deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete location",
      error: error.message,
    });
  }
};
