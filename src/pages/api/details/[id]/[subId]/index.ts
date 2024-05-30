import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method=='GET')
  {
  try {
    const {id,subId,name,standard}=req.query;
    console.log(req.url)
    const urlSearchParams=new URLSearchParams(req.url?.slice(req.url.indexOf('?'),req.url.length));
    console.log(urlSearchParams.get('name'))
    console.log(urlSearchParams.get('standard'))
    console.log(urlSearchParams)
    res.status(200).send({ 
        id:`YOU HAVE ENTERED ID ${id}`,
        subId:`YOU HAVE ENTERED SUB ID ${subId}`,
        name:(name ?`YOU HAVE ENTERED NAME ${name}`:"NO NAME ENTERED"),
        class:(standard?`YOU HAVE ENTERED STANDARD ${standard}`:"NO STANDARD ENTERED"),
})
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }}
  else
  {
    res.status(404).send({error:"INVALID API"})
  }
}
//http://localhost:3000/api/