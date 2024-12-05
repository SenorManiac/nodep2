const express = require("express");
const router = express.Router();


const messages = [
    { text: "Hello, world!", user: "John", added: new Date() },
    { text: "Express is great!", user: "Jane", added: new Date() }
];


router.get("/", (req, res) => {
    res.render("index", { messages });
});


router.get("/new", (req, res) => {
    res.render("form");
});


router.post("/new", (req, res) => {
    const { user, message } = req.body;
    messages.push({ text: message, user, added: new Date() });
    res.redirect("/");
});

module.exports = router;
