import multer from "multer";
import path from "path"; // To handle file extensions

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Save the files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    // Extract the file extension
    const ext = path.extname(file.originalname);

    // Generate a unique file name by appending the current timestamp
    const uniqueName =
      path.basename(file.originalname, ext) + "-" + Date.now() + ext;

    cb(null, uniqueName); // Save the file with a unique name
  },
});

const upload = multer({ storage });
export default upload;
