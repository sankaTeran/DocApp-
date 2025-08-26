// //  for uploading files (like doctor images).
// import multer from "multer";

// const storage = multer.diskStorage({    //tells Multer to save the file on your disk (locally).
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer(storage);

// export default upload;

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure "uploads" folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g. 169307963.png
  },
});

const upload = multer({ storage });

export default upload;
