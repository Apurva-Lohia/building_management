import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.POSTGRES_URL);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const result = await sql`SELECT * FROM documents ORDER BY uploaded_at DESC`;
    res.status(200).json(result);
  } else if (req.method === 'POST') {
    const { title, description, file_url } = req.body;
    const result = await sql`
      INSERT INTO documents (title, description, file_url)
      VALUES (${title}, ${description}, ${file_url})
      RETURNING *;
    `;
    res.status(201).json(result[0]);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
