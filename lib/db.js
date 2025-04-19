import { MongoClient } from "mongodb";

const OPTIONS = {};
const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI ?? "", OPTIONS);

// Database Instance for Better-Auth Adapter
export const db = client.db("sample_mflix");
