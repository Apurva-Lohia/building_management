import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.POSTGRES_URL);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM committee_members ORDER BY id ASC`;
      res.status(200).json(result);
    } catch (err) {
      console.error('DB Error:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
