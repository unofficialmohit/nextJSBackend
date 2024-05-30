import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(req.headers.authorization);
  switch(req.method)
  {
case 'GET':
  try {
    const {subId2}=req.query;
    const result = `YOU HAVE ENTERED SUB-SUB-ID ${subId2}`
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
break;
default:
  {
    res.status(404).send({error:"INVALID API"})
  }
}
}
//http://localhost:3000/api/