// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.VITE_SUPABASE_URL,
//   process.env.VITE_SUPABASE_ANON_KEY,
//   process.env.SUPABASE_DB_URL,
// );

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   const totalAmount = 10000;

//   // Hardcoded unit owners
//   const unitOwners = [
//     { name: 'Anita Mehta', entitlements: 120 },
//     { name: 'Ravi Sharma', entitlements: 90 }
//   ];

//   const totalEntitlements = unitOwners.reduce((sum, o) => sum + o.entitlements, 0);

//   const levyData = unitOwners.map((owner) => ({
//     owner_name: owner.name,
//     entitlements: owner.entitlements,
//     amount: ((owner.entitlements / totalEntitlements) * totalAmount).toFixed(2),
//     due_date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
//     created_at: new Date().toISOString(),
//     status: 'unpaid'
//   }));

//   try {
//     const { data, error } = await supabase
//       .from('levy_notices')
//       .insert(levyData);

//     if (error) throw error;

//     res.status(200).json({ message: 'Levy notices inserted', data });
//   } catch (err) {
//     console.error('Supabase insert error:', err.message);
//     res.status(500).json({ error: err.message });
//   }
// }

// /api/insert_levy.js
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    await client.connect();

    const levyNotices = [
      {
        owner_name: 'Anita Mehta',
        entitlements: 120, // Changed from unit_entitlements
        amount: 5714.29,
        due_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        status: 'unpaid',
      },
      {
        owner_name: 'Ravi Sharma',
        entitlements: 90, // Changed from unit_entitlements
        amount: 4285.71,
        due_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        status: 'unpaid',
      },
    ];

    for (const notice of levyNotices) {
      await client.query(
        `INSERT INTO levy_notices (owner_name, entitlements, amount, due_date, status)
         VALUES ($1, $2, $3, $4, $5)`, // Changed column name
        [
          notice.owner_name,
          notice.entitlements, // Changed property name
          notice.amount,
          notice.due_date,
          notice.status,
        ]
      );
    }

    res.status(200).json({ message: 'Levy notices inserted successfully!' });
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).json({ error: 'Failed to insert data', details: err.message });
  } finally {
    await client.end();
  }
}