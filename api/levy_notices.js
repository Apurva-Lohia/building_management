import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM levy_notices ORDER BY created_at DESC');
    client.release();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ error: 'Failed to fetch levy notices.' });
  }
}
