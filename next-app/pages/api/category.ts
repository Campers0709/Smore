// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const API_URL = process.env.API_URL
  const urlParams = new URLSearchParams(req.url)

  if (req.method == 'GET') {
    const { data } = await axios.get(
      `${API_URL}test_v1/category?user_id=${urlParams.get('user_id')}`
    )
    res.status(200).json(data)
  } else if (req.method == 'POST') {
    const { data } = await axios.post(`${API_URL}text_v1/category`, {
      user_id: urlParams.get('user_id'),
    })
    res.status(200).json(data)
  }
}
