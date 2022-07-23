// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!req.url) {
    return res.status(400)
  }
  const url = new URL('http://aaa.com' + req.url)
  const user_id = url.searchParams.get('user_id')
    ? url.searchParams.get('user_id')
    : ''
  const category_id = url.searchParams.get('category_id')
    ? url.searchParams.get('category_id')
    : ''
  if (!user_id) {
    res.status(400)
  }
  const API_URL = process.env.API_URL
  const req_url = `${API_URL}test_v1/v2/items?user_id=${user_id}&category_id=${category_id}`
  const { data } = await axios.get(req_url)
  console.log(req_url, data)
  res.status(200).json(data)
}
