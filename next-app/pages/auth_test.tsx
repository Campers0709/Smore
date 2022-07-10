import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  getTwitterUserAuthURL,
  getTwitterAccessTokenParams,
} from '../functions/twitter'
import axios from 'axios'

const AuthTest: NextPage = () => {
  const [twitterUserAuthURL, setTwitterUserAuthURL] = useState<string>('')

  useEffect(() => {
    const querystring = window.location.search

    // リダイレクト後の処理
    if (querystring) {
      const params = getTwitterAccessTokenParams(querystring)
      const res_token = axios
        .post('/api/getTwitterToken', params)
        .then(({ data }) => {
          console.log(data)
        })
    } else {
      setTwitterUserAuthURL(getTwitterUserAuthURL())
    }
  }, [])

  return (
    <>
      <div>
        <Link href={twitterUserAuthURL}>
          <a
            style={{
              color: 'red',
            }}
          >
            twitter連携する
          </a>
        </Link>
      </div>
    </>
  )
}

export default AuthTest

/*

curl --location --request  POST 'https://api.twitter.com/2/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic VVc5SVlWSlpMVkZITm01S09TMWxXSGhvV0ZrNk1UcGphUTpIUmhKMEJLM0l2LVN2UWlIbWlBNW8wcU9SNlZ3bWN1Qzc0NjRfYnhZN2FCRkFHZjFMcw==' \
--data-urlencode 'code=b294WEJJdVFZT2FnYVlMWXR5LUhwVkM5N3hHUUdoWXdDNnBIMFFjX2dJdmRCOjE2NTczNzY5MjUzOTc6MToxOmFjOjE' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=http://127.0.0.1:3000/auth_test/' \
--data-urlencode 'code_verifier=bbb'

*/
