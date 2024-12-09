const { Pool } = require('pg');

const config = {
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'password',
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || 'railway'
};

module.exports = new Pool(config);