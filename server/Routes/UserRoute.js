const express = require("express");
const { createCourseController, getData, deleteData } = require('../Controller/UserData');
const router = express.Router();

router.post("/upload", createCourseController);
router.get("/data", getData);
router.delete("/delete/:id", deleteData);

module.exports = router;
