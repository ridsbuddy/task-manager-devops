const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 10 });
async function initDb() { await pool.query(`CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY,title VARCHAR(255) NOT NULL,description TEXT,completed BOOLEAN NOT NULL DEFAULT FALSE,created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`); }
module.exports={pool,initDb};
