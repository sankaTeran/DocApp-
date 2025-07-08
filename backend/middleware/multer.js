//  for uploading files (like doctor images).
import multer from "multer";

const storage = multer.diskStorage({    //tells Multer to save the file on your disk (locally).
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer(storage);

export default upload;
