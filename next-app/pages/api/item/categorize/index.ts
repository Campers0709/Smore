// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const API_URL = process.env.API_URL
  console.log(API_URL, req.body)
  if (req.method == 'GET') {
  } else if (req.method == 'POST') {
    const { data } = await axios.post(
      `${API_URL}test_v1/v2/item/categorize`,
      req.body
    )
    res.status(200).json(data)
  }
}
