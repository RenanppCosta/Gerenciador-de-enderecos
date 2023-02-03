const express = require("express");
const router = express.Router();
const addressController = require("../controllers/AddressController");

router.get("/", addressController.getAllAdress)
router.post("/", addressController.createAddress);
router.put("/:id", addressController.updateAddress);
router.delete("/:id", addressController.deleteAddress);

module.exports = router;