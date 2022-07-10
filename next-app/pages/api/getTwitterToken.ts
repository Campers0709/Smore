// https://codegino.com/blog/next-hide-api-key
// https://www.smashingmagazine.com/2021/12/protect-api-key-production-nextjs-api-route/
// https://fwywd.com/tech/next-env

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const getAccessTokenURL = `https://api.twitter.com/2/oauth2/token`

const getHeaderAuthValue = () => {
  const client_id = process.env.CLIENT_ID
  const client_secret = process.env.CLIENT_SECRET
  if (!client_id || !client_secret) {
    throw new Error('client id または client_secretが定義されていません')
  }
  const base64string = Buffer.from(`${client_id}:${client_secret}`).toString(
    'base64'
  )
  return `Basic ${base64string}`
}

type GetTwitterAccessTokenRes = {
  access_token?: string
  error_msg?: string
}

const createFormParams = (params: Object) => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetTwitterAccessTokenRes>
) {
  const { code, client_id, redirect_uri, code_verifier } = req.body
  if (!code || !client_id || !redirect_uri || !code_verifier) {
    return res.status(400).json({ error_msg: 'bad request' })
  }

  const params = createFormParams(req.body)
  if (!process.env.BEARER_TOKEN) {
    console.error('process.env.BEARER_TOKENがない')
  }
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: getHeaderAuthValue(),
    },
  }
  const { data } = await axios.post(getAccessTokenURL, params, config)
  console.log(data.response)

  return res.status(200).json({ access_token: 'aaaaaa' })
}
