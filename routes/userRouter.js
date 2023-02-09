const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { verifyToken } = require("../middlewares/auth")

router.get("/", verifyToken, userController.getAllUser);
router.get("/:id", verifyToken, userController.getUserByid);
router.post("/", userController.createUser);
router.post("/login", userController.login);
router.put("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);

module.exports = router;