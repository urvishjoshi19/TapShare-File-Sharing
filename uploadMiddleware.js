// uploadMiddleware.js
const multer = require('multer');

class UploadMiddleware {
  constructor(destinationFolder = 'uploads/') {
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, destinationFolder);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
      },
    });

    this.upload = multer({ storage: this.storage });
  }

  handleUpload() {
    return this.upload.single('file');
  }
}

module.exports = new UploadMiddleware();
