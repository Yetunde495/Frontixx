import { collection, getDocs, query } from "firebase/firestore";
import firebaseDb from "./firebaseConfig";
import { NextApiRequest, NextApiResponse } from 'next';





interface Post {
  id: string;
  title: string;
  route: string;
  content: string;
}

interface Posts {
  posts: Post[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts: Posts[] = [];
    const docRef = collection(firebaseDb.db, `blog/main/posts`)
    const q = query(docRef);
    const doc = await getDocs(q);

    const orders = [];

  doc.docs.forEach((d) => {
    orders.push(d.data());
  });



    res.json(orders);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
}








