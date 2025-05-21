import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('levyDB');
    const collection = db.collection('notices');
    const notices = await collection.find().toArray();
    res.status(200).json(notices);
  } catch (error) {
    console.error('Fetch levy error:', error);
    res.status(500).json({ error: 'Failed to fetch levy notices' });
  } finally {
    await mongoClient.close();
  }
}

// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI; // stored in Vercel env vars
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside Vercel.');
// }

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri, options);
//   global._mongoClientPromise = client.connect();
// }
// clientPromise = global._mongoClientPromise;

// export default async function handler(req, res) {
//   try {
//     const client = await clientPromise;
//     const db = client.db('levyDB'); // use your database name here
//     const collection = db.collection('notices');

//     if (req.method === 'GET') {
//       const notices = await collection.find().toArray();
//       res.status(200).json(notices);
//     } else {
//       res.setHeader('Allow', ['GET']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   } catch (err) {
//     console.error('MongoDB error:', err);
//     res.status(500).json({ error: 'Failed to fetch levy notices' });
//   }
// }
