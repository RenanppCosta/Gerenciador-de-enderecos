const express = require("express");
const router = express.Router();
const addressController = require("../controllers/AddressController");
const { verifyToken } = require("../middlewares/auth")

router.get("/", verifyToken, addressController.getAllAdress)
router.post("/", verifyToken, addressController.createAddress);
router.put("/:id", verifyToken, addressController.updateAddress);
router.delete("/:id", verifyToken, addressController.deleteAddress);

module.exports = router;