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
import app from './app.js';
import cloudinary from 'cloudinary';

// Use CORS middleware
app.use(cors({
  origin: ['https://mern-stack-hospital-management-system-dvo8.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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


