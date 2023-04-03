const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.post("/", registerController.handleNewUser);
// router.delete("/", registerController.handleDeleteUser);

module.exports = router;
