import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for inserts
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const totalAmount = 10000;

  // Hardcoded unit owners
  const unitOwners = [
    { name: 'Anita Mehta', entitlements: 120 },
    { name: 'Ravi Sharma', entitlements: 90 }
  ];

  const totalEntitlements = unitOwners.reduce((sum, o) => sum + o.entitlements, 0);

  const levyData = unitOwners.map((owner) => ({
    owner_name: owner.name,
    entitlements: owner.entitlements,
    amount: ((owner.entitlements / totalEntitlements) * totalAmount).toFixed(2),
    due_date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
    created_at: new Date().toISOString(),
    status: 'unpaid'
  }));

  try {
    const { data, error } = await supabase
      .from('levy_notices')
      .insert(levyData);

    if (error) throw error;

    res.status(200).json({ message: 'Levy notices inserted', data });
  } catch (err) {
    console.error('Supabase insert error:', err.message);
    res.status(500).json({ error: err.message });
  }
}