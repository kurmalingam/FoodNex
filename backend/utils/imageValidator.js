const ErrorHandler = require("./errorHandler");

const validateImage = (imageData) => {
  const maxFileSize = parseInt(process.env.MAX_FILE_SIZE) || 5000000;
  const allowedFileTypes = (process.env.ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/jpg,image/webp').split(',');

  if (!imageData.startsWith('data:image')) {
    throw new ErrorHandler("Invalid image data", 400);
  }

  const mimeType = imageData.substring(imageData.indexOf(":") + 1, imageData.indexOf(";"));
  if (!allowedFileTypes.includes(mimeType)) {
    throw new ErrorHandler(`Invalid image type. Only ${allowedFileTypes.join(', ')} are allowed.`, 400);
  }

  // Calculate file size from base64 string
  const base64Data = imageData.split(',')[1];
  const fileSize = Buffer.from(base64Data, 'base64').length;

  if (fileSize > maxFileSize) {
    throw new ErrorHandler(`File size exceeds the limit of ${maxFileSize / 1000000}MB.`, 400);
  }
};

module.exports = validateImage;
