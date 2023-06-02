import multer from "multer";

export const checkImageUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./src/public/upload/users");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now().toString()}_${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const formatImg = ["image/png", "image/jpg", "image/jpeg"].find(
      (fmt) => fmt === file.mimetype
    );
    if (formatImg) {
      return cb(null, true);
    }
    return cb(null, false);
  },
});
