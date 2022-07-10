import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

type CategoriesProps = {
  categories: string[]
}

type ArticleProps = {
  title: string
  item_id: string
  url: string
  limit: string
  time: string
  ai_summary?: string
}

type ArticlesProps = {
  articles: ArticleProps[]
}

const Articles: React.FC<ArticlesProps> = ({ articles }): JSX.Element => {
  return (
    <Wrap>
      {articles.map((article, key) => {
        return (
          <WrapItem key={key}>
            <Article
              title={article.title}
              item_id={article.item_id}
              url={article.url}
              limit={article.limit}
              time={article.time}
              ai_summary={article.ai_summary}
            />
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

const Article: React.FC<ArticleProps> = ({
  title,
  item_id,
  url,
  limit,
  time,
  ai_summary = 'summary:',
}) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="10px">
      <Box
        bg="gray.200"
        w="200px"
        h="200px"
        display="flex"
        justifyContent="end"
        color="black"
      >
        <ArticleMenu item_id="" />
      </Box>
      <Text>{title}</Text>
      {/* <Text>{limit}</Text> */}
      {/* <Text>{time}</Text> */}
      <Text>{ai_summary}</Text>
    </Box>
  )
}

type MenuProps = {
  item_id: string
}

const ArticleMenu: React.FC<MenuProps> = ({ item_id }): JSX.Element => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <ChevronDownIcon />
      </MenuButton>
      <MenuList borderRadius={'15%'} h={'30vh'}>
        <Box h={'2vh'}></Box>
        <Box textAlign={'left'} marginLeft={'10px'}>
          <Text fontWeight={'bold'} fontSize={'9px'} color={'gray'}>
            要約
          </Text>
        </Box>
        <MenuItem>要約編集</MenuItem>
        <Box textAlign={'left'} marginLeft={'10px'}>
          <Text fontWeight={'bold'} fontSize={'9px'} color={'gray'}>
            カテゴリ
          </Text>
        </Box>
        <MenuItem>フロントエンド</MenuItem>
        <MenuItem>バックエンド</MenuItem>
      </MenuList>
    </Menu>
  )
}

type CategoryDetailProps = {
  username?: string
  categoryname?: string
  id: string
}

const ArticleHeader: React.FC<{ name: string }> = (props) => {
  const username = props.name

  const [profile_image_url, set_profile_image_url] = useState('')
  useEffect(() => {
    const url = localStorage.getItem('profile_image_url')
    if (url) {
      set_profile_image_url(url)
    }
  }, [])

  return (
    <Box
      paddingTop={'5px'}
      h={'10vh'}
      position={'fixed'}
      bg={'white'}
      w={'100%'}
      zIndex={1}
    >
      <HStack justify={'space-between'}>
        <Box paddingLeft={'3vw'}>
          <HStack>
            <Image
              src="/images/IMG_0528.PNG"
              width={64}
              height={64}
              objectFit="contain"
              alt="My avatar"
            />
            <Text fontWeight={'bold'} fontSize={20} color={'gray'}>
              ホーム
            </Text>
          </HStack>
        </Box>
        <Box w={'60vw'}>
          <Input
            placeholder="自分のブックマークを検索"
            variant="filled"
            borderRadius={'full'}
          />
        </Box>
        <Box paddingRight={'15'}>
          <Menu>
            <MenuButton>
              {profile_image_url !== '' ? (
                <Avatar name={username} src={profile_image_url} border="2px" />
              ) : (
                ''
              )}
            </MenuButton>
            <MenuList>
              <NextLink href="/profile" passHref>
                <MenuItem fontWeight={'bold'}>プロフィール</MenuItem>
              </NextLink>
              <NextLink href="/" passHref>
                <MenuItem fontWeight={'bold'} textColor={'red'}>
                  ログアウト
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  )
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({
  categoryname = 'カテゴリ名',
  username = 'アカウント名',
  id = 'seitamuro',
}) => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')

    axios.get(`/api/items?user_id=${user_id ? user_id : ''}`).then((d) => {
      setArticles(d.data.body.items)
    })

    axios.get(`/api/category?user_id=${user_id ? user_id : ''}`).then((d) => {
      setCategories(d.data.body)
    })
  }, [])

  return (
    <Container maxW="800px" centerContent>
      <ArticleHeader name={username} />
      <Tabs align="center" colorScheme="black">
        <TabList>
          <Tab fontWeight={'bold'}>
            <Heading textAlign={'center'}>{categoryname}</Heading>
            <Box h={'30vh'}></Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Articles articles={articles} />
          </TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default CategoryDetail
