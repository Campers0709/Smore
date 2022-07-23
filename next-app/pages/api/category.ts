// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const API_URL = process.env.API_URL

  if (req.method == 'GET') {
    const url = new URL('http://aaa.com' + req.url)
    const user_id = url.searchParams.get('user_id')
      ? url.searchParams.get('user_id')
      : ''
    if (!user_id) {
      res.status(400)
    }

    const { data } = await axios.get(
      `${API_URL}test_v1/v2/category?user_id=${user_id}`
    )
    res.status(200).json(data)
  } else if (req.method == 'POST') {
    const { data } = await axios.post(`${API_URL}test_v1/v2/category`, {
      user_id: req.body.user_id,
      category_name: req.body.category_name,
    })
    console.log('カテゴリ追加', req.body, data)
    res.status(200).json(data)
  }
}
