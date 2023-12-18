const mongoose = require('mongoose');

class File {
  constructor(fileName, fileSize, fileType) {
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.fileType = fileType;
    this.uploadDate = new Date();
  }

  getFileDetails() {
    return {
      fileName: this.fileName,
      fileSize: this.fileSize,
      fileType: this.fileType,
      uploadDate: this.uploadDate,
    };
  }
}

// Define the schema for the File model
const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

// Create the File model using the schema
const FileModel = mongoose.model('File', fileSchema);

// Export the enhanced File class
module.exports = { File, FileModel };


