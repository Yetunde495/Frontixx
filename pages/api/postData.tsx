import { doc, getDoc } from "firebase/firestore";
import firebaseDb from "./firebaseConfig";
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse, id:string) {
  try {
    const { postId } = req.query;
    const docRef = doc(firebaseDb.db, `blog/main/posts/${postId}`)

    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      res.json(docData);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
    // const docs = await (await getDoc(docRef)).data();

    // res.json(docs);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
}