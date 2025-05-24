import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  const client = await pool.connect();

  try {
    if (req.method === 'GET') {
      const result = await client.query('SELECT * FROM levy_notices ORDER BY due_date ASC');
      res.status(200).json(result.rows);
    } else if (req.method === 'PATCH') {
      const { id, status } = req.body;

      if (!id || !status) {
        return res.status(400).json({ error: 'Missing levy notice ID or status' });
      }

      await client.query(
        `UPDATE levy_notices SET status = $1 WHERE id = $2`,
        [status, id]
      );

      res.status(200).json({ message: `Status updated to ${status}` });
    } else {
      res.setHeader('Allow', ['GET', 'PATCH']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error('Levy Notices Error:', err);
    res.status(500).json({ error: 'Failed to handle levy notices' });
  } finally {
    client.release();
  }
}
