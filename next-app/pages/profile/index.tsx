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
  ai_summary = 'できたてでおいしい',
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
      <Text>{limit}</Text>
      <Text>{time}</Text>
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
      <MenuList>
        <MenuItem>要約作成</MenuItem>
        <MenuItem>要約作成</MenuItem>
        <MenuItem>要約作成</MenuItem>
      </MenuList>
    </Menu>
  )
}

type ProfileProps = {
  username: string
  id: string
}

const ArticleHeader: React.FC<{ name: string }> = (props) => {
  const username = props.name
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
              <Avatar name={username} border="2px" />
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

const Profile: React.FC<ProfileProps> = ({
  username = 'アカウント名',
  id = '@seitamuro',
}) => {
  const [articles, setArticles] = useState([
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
    {
      title: 'Title',
      item_id: 'xxxx',
      url: 'hoge',
      time: 'forever',
      limit: 'forever',
      ai_summary: 'AI summary',
    },
  ])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('/api/items').then((d) => {
      setArticles(JSON.parse(d.data.body).items)
    })
  }, [])

  useEffect(() => {
    axios.get('/api/category').then((d) => {
      setCategories(JSON.parse(d.data.body))
      console.log(JSON.parse(d.data.body))
    })
  }, [])

  return (
    <Container maxW="800px" centerContent>
      <ArticleHeader name={username} />
      <Box h={'10vh'}></Box>
      <Avatar size="2xl" name={username} border="2px" />
      <Box h={'3vh'}></Box>
      <Heading textAlign={'center'}>{username}</Heading>
      <Box h={'1vh'}></Box>
      <Text>{id}</Text>
      <Box h={'2vh'}></Box>
      <Tabs align="center">
        <TabList>
          <Tab fontWeight={'bold'}>未分類ブックマーク</Tab>
          <Tab fontWeight={'bold'}>カテゴリ一覧</Tab>
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

export default Profile
