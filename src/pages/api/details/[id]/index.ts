import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method=='GET')
  {
  try {
    const {id}=req.query;
    const result = `YOU HAVE ENTERED ID ${id}`
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }}
  else
  {
    res.status(404).send({error:"INVALID API"})
  }
}
//http://localhost:3000/api/