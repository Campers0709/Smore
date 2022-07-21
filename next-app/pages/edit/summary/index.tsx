import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import type { Article } from '../../../types/Article'

const SummaryCreate: React.FC<{}> = (): JSX.Element => {
  const [userName, setUserName] = useState('')
  const [text, setText] = useState('')
  const [article, setArticle] = useState<Article>({
    tweet: '',
    url: '',
    user_text: '',
    item_id: 0,
  })
  useEffect(() => {
    const userNameStore = localStorage.getItem('name')
    if (!userNameStore) {
      throw new Error('記事取得に失敗しました')
    }
    setUserName(userNameStore)

    const articleString = localStorage.getItem('article')
    if (!articleString) {
      throw new Error('記事取得に失敗しました')
    }
    setArticle(JSON.parse(articleString))
  }, [])
  const router = useRouter()

  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <>
      <Header name={userName} />
      <Box h={'10vh'}></Box>
      <Center>
        <Stack display={'flex'}>
          <Box w={'70vw'}>
            <Heading size="md" color={'gray'}>
              要約作成
            </Heading>
            <Box h={'2vh'}></Box>
            <HStack>
              <Heading size="lg">{article.tweet}</Heading>
              <NextLink target="_blank" href={article.url} passHref>
                <Text>{article.url}</Text>
              </NextLink>
            </HStack>
            <Box h={'5vh'}></Box>

            <VStack>
              <Box w={'70vw'}>
                <Textarea
                  placeholder="要約 200字程度でまとめてみよう"
                  h={'30vh'}
                  value={text}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Button
                  color={'white'}
                  bg={'#CEA618'}
                  px={'25px'}
                  borderRadius={'full'}
                  width={'150px'}
                  alignItems={'center'}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                  onClick={async () => {
                    console.log(`read ${article.item_id} ${text}`)
                    const { data } = await axios.post('/api/item/read', {
                      item_id: article.item_id,
                      user_text: text,
                    })
                    console.log(
                      `/api/item/read response '${
                        JSON.parse(data.body).status
                      }'`
                    )
                    router.push('/profile')
                  }}
                >
                  作成
                </Button>
              </Box>
            </VStack>

            <Box h={'5vh'}></Box>
          </Box>
        </Stack>
      </Center>
    </>
  )
}

export default SummaryCreate
