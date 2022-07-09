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
