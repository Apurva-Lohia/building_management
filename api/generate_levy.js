import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    const totalAmount = 10000; // Total levy to be divided
    const unitOwners = [
      { owner_name: 'Anita Mehta', entitlements: 120 },
      { owner_name: 'Ravi Sharma', entitlements: 80 },
    ];

    const totalEntitlements = unitOwners.reduce((sum, owner) => sum + owner.entitlements, 0);

    const levyData = unitOwners.map((owner) => ({
      ...owner,
      amount: ((owner.entitlements / totalEntitlements) * totalAmount).toFixed(2),
      due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      created_at: new Date(),
      status: 'unpaid',
    }));

    const client = await pool.connect();

    for (const notice of levyData) {
      await client.query(
        `INSERT INTO levy_notices (owner_name, entitlements, amount, due_date, created_at, status)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          notice.owner_name,
          notice.entitlements,
          notice.amount,
          notice.due_date,
          notice.created_at,
          notice.status,
        ]
      );
    }

    client.release();
    res.status(200).json({ message: 'Levy notices inserted successfully', data: levyData });
  } catch (error) {
    console.error('Insert Error:', error);
    res.status(500).json({ error: 'Failed to insert levy notices.' });
  }
}
