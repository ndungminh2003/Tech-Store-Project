const express = require("express");
const {
  createProduct,
  getaProduct,
  getProductBySlug,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  searchProduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/search/:query", searchProduct);

router.get("/:slug", getProductBySlug);
router.get("/by-id/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;
