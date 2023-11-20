const router = require("express").Router();
const authorize = require("../../helpers/middlewares/authorize");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "images") cb(null, "uploads/addtocart");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const {
  createAddtocart,
  updateAddtocart,
  deleteAddtocart,
  getAllAddtocart,
  getOneAddtocart,
} = require("../controllers/addtocartsecu.controller");

router.post("/", upload.array("images", 10), createAddtocart);
router.put("/:id", upload.array("images", 10), updateAddtocart);
router.delete("/:id", deleteAddtocart);
router.get("/:id", getOneAddtocart);
router.get("/", getAllAddtocart);

module.exports = router;
