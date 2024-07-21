// import dotenv from 'dotenv';
// dotenv.config();

// import app from './app.js';

// import cloudinary from 'cloudinary';
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);

// });

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cloudinary from 'cloudinary';
import app from './app.js'; // Ensure this imports your app instance

// Use CORS middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL], // Allow both frontend and dashboard URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Manually set CORS headers if necessary
app.use((req, res, next) => {
  const allowedOrigins = [process.env.FRONTEND_URL, process.env.DASHBOARD_URL];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
