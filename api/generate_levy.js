// import { neon } from '@neondatabase/serverless';
// import { MongoClient } from 'mongodb';

// const sql = neon(process.env.POSTGRES_URL);
// const mongoClient = new MongoClient(process.env.MONGODB_URI);
// const totalAmount = 10000;

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   try {
//     await mongoClient.connect();
//     const db = mongoClient.db('levyDB');
//     const collection = db.collection('notices');

//     // Get all unit owners with entitlements
//     const unitOwners = await sql`
//       SELECT name, unit_entitlements 
//       FROM committee_members 
//       WHERE unit_entitlements IS NOT NULL
//     `;

//     const totalEntitlements = unitOwners.reduce((sum, owner) => sum + owner.unit_entitlements, 0);

//     const levyData = unitOwners.map((owner) => ({
//       ownerName: owner.name,
//       entitlements: owner.unit_entitlements,
//       amount: ((owner.unit_entitlements / totalEntitlements) * totalAmount).toFixed(2),
//       dueDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
//       createdAt: new Date(),
//       status: 'unpaid',
//     }));

//     await collection.insertMany(levyData);

//     res.status(200).json({ message: 'Levy notices generated successfully', data: levyData });
//   } catch (error) {
//     console.error('Levy generation error:', error);
//     res.status(500).json({ error: 'Failed to generate levy notices' });
//   } finally {
//     await mongoClient.close();
//   }
// }

// import { MongoClient } from 'mongodb';

// const mongoClient = new MongoClient(process.env.MONGODB_URI);
// const totalAmount = 10000;

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   try {
//     await mongoClient.connect();
//     const db = mongoClient.db('levyDB');
//     const collection = db.collection('notices');

//     // Use hardcoded unit owners instead of PostgreSQL
//     const unitOwners = [
//       { name: 'Anita Mehta', unit_entitlements: 120 },
//       { name: 'Ravi Sharma', unit_entitlements: 90 },
//     ];

//     const totalEntitlements = unitOwners.reduce((sum, owner) => sum + owner.unit_entitlements, 0);

//     const levyData = unitOwners.map((owner) => ({
//       ownerName: owner.name,
//       entitlements: owner.unit_entitlements,
//       amount: ((owner.unit_entitlements / totalEntitlements) * totalAmount).toFixed(2),
//       dueDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
//       createdAt: new Date(),
//       status: 'unpaid',
//     }));

//     await collection.insertMany(levyData);

//     res.status(200).json({ message: 'Levy notices generated successfully', data: levyData });
//   } catch (error) {
//     console.error('Levy generation error:', error);
//     res.status(500).json({ error: 'Failed to generate levy notices' });
//   } finally {
//     await mongoClient.close();
//   }
// }

import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const totalAmount = 10000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    console.log('Connecting to MongoDB...'); // Debugging line
    await mongoClient.connect();
    const db = mongoClient.db('levyDB');
    const collection = db.collection('notices');
    console.log('Connected to MongoDB'); // Debugging line

    // Use hardcoded unit owners
    const unitOwners = [
      { name: 'Anita Mehta', unit_entitlements: 120 },
      { name: 'Ravi Sharma', unit_entitlements: 90 },
    ];

    const totalEntitlements = unitOwners.reduce((sum, owner) => sum + owner.unit_entitlements, 0);
    const levyData = unitOwners.map((owner) => ({
      ownerName: owner.name,
      entitlements: owner.unit_entitlements,
      amount: ((owner.unit_entitlements / totalEntitlements) * totalAmount).toFixed(2),
      dueDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      createdAt: new Date(),
      status: 'unpaid',
    }));

    console.log('Levy data to insert:', levyData); // Debugging line

    const result = await collection.insertMany(levyData);
    console.log('Inserted data:', result); // Debugging line

    res.status(200).json({ message: 'Levy notices generated successfully', data: levyData });
  } catch (error) {
    console.error('Levy generation error:', error);
    res.status(500).json({ error: 'Failed to generate levy notices' });
  } finally {
    await mongoClient.close();
  }
}
