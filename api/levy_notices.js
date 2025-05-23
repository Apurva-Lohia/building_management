// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.SUPABASE_DB_URL,
//   ssl: { rejectUnauthorized: false },
// });

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM levy_notices ORDER BY created_at DESC');
//     client.release();
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error('Fetch Error:', error);
//     res.status(500).json({ error: 'Failed to fetch levy notices.' });
//   }
// }


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
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Missing levy notice ID' });
      }

      await client.query(
        `UPDATE levy_notices SET status = 'paid' WHERE id = $1`,
        [id]
      );

      res.status(200).json({ message: 'Status updated to paid' });
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
