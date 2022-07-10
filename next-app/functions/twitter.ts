const CLIENT_ID = 'UW9IYVJZLVFHNm5KOS1lWHhoWFk6MTpjaQ'
const REDIRECT_URL = 'http://127.0.0.1:3000/auth_test/'
const AUTH_SCOPE = 'like.read'

import { randomBytes } from 'crypto'

export const getRandomString = () => {
  return randomBytes(32).toString('hex')
}
/**
 * state: for CSRF attack
 */
export const getTwitterUserAuthURL = () => {
  const state = getRandomString()

  const challenge = getRandomString()
  localStorage.setItem('challenge', challenge)

  return `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${AUTH_SCOPE}&state=${state}&code_challenge=bbb&code_challenge_method=plain`
}

export const getTwitterAccessTokenParams = (querystring: string) => {
  const urlParams = new URLSearchParams(querystring)

  // TODO: リクエストのstateと一致するかどうか確かめる
  const state = urlParams.get('state')
  const code = urlParams.get('code')
  if (!state || !code) {
    throw new Error('state or code がパラメーターにありません')
  }

  const challenge = localStorage.getItem('challenge')
  console.warn(challenge)
  if (!challenge) {
    throw new Error('challengeが保存されていない')
  }

  let params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('code_verifier', 'bbb')
  params.append('client_id', CLIENT_ID)
  params.append('redirect_uri', REDIRECT_URL)
  console.log(params)
  return params
}
