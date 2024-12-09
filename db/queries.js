const pool = require('./pool');

async function getMessages() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM messages');
        return result.rows;
    } finally {
        client.release();
    }
}

async function addMessage(messages) {
    const {user_name, message} = messages;
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO messages (user_name, message) VALUES ($1, $2)', [user_name, message]);
    } finally {
        client.release();
    }
}

module.exports = {
    getMessages,
    addMessage
};