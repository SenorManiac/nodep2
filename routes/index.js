const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

// Route to render the main page with messages
router.get("/", messageController.getMessages);

// Route to handle form submissions
router.post("/new", messageController.addMessage);

// Route to render the "new message" form
router.get("/new", (req, res) => {
    res.render("form"); // Ensure 'form.ejs' exists in 'views'
});



module.exports = router;
