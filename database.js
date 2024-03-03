import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || "postgres://postgres:santiago45@localhost:5432/Salita",
})
export default pool;

