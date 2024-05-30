import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method=='POST')
  {
  try {
    const data=JSON.parse(req.body);
    const{email,password}=data;
    console.log(req.body);
    if(email=='mohit@gmail.com' && password=='mohit')
    {

    return  res.status(200).send({ msg:"LOGIN SUCCESSFULL" })
    }
return res.status(401).send({msg:"ACCOUNT DOESNT EXIST"});
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' ,msg:err})
  }}
  else
  {
    res.status(404).send({error:"INVALID API"})
  }
}
//http://localhost:3000/api/login