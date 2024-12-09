const db = require("../db/queries");

const getMessages = async (req, res) => {
    const messages = await db.getMessages();
    res.render("index", { messages });
};

const addMessage = async (req, res) => {
    const { user_name, message } = req.body;
    await db.addMessage({ user_name, message });
    res.redirect("../");
};


module.exports = {
    getMessages,
    addMessage
};