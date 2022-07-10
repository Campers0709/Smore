import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const BEARER_TOKEN = process.env.BEARER_TOKEN

  const { user_name } = req.body
  const config = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  }
  const user_fields = ['id', 'name', 'username', 'profile_image_url']
  const api_url = `https://api.twitter.com/2/users/by/username/${user_name}?user.fields=${user_fields.join(
    ','
  )}`
  const { data } = await axios.get(api_url, config)
  const user_data = data.data
  user_data.user_id = user_data.id
  if (user_data) {
    console.log(user_data)
    return res.status(200).json(user_data)
  }
  console.error('user取得エラー')
  return res.status(400)
}
