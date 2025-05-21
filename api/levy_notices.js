import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('levyDB');
    const collection = db.collection('otices');
    const notices = await collection.find().toArray();
    res.status(200).json(notices);
  } catch (error) {
    console.error('Fetch levy error:', error);
    res.status(500).json({ error: 'Failed to fetch levy notices' });
  } finally {
    await mongoClient.close();
  }
}
