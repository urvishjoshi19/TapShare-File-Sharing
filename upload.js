// routes/upload.js
const express = require('express');
const multer = require('multer');

class UploadHandler {
  constructor() {
    this.router = express.Router();
    this.configureMulter();
    this.setupRoutes();
  }

  configureMulter() {
    this.upload = multer({ dest: 'uploads/' });
  }

  setupRoutes() {
    this.router.post('/upload', this.upload.single('file'), this.handleUpload.bind(this));
  }

  handleUpload(req, res) {
    const { file } = req;
   
    res.json({ message: 'File uploaded successfully', file });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = UploadHandler;
