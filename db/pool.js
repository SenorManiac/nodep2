const { Pool } = require('pg');

const connectionString = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.DATABASE_PUBLIC_URL;

const config = {
    connectionString,
    ssl: {
        rejectUnauthorized: false, // This is for self-signed certificates. Adjust as needed.
    }
};



module.exports = new Pool(config);