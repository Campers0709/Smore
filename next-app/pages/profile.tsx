import axios from 'axios'
import {
  Avatar,
  Icon,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Container,
  Stack,
  Center,
  VStack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'

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

const ArticleHeader: React.FC<{}> = (props) => {
  return (
    <Box paddingTop={'5'} h={'10vh'} position={'fixed'} bg={'white'} w={'100%'}>
      <HStack justify={'space-between'}>
        <Box paddingLeft={'20'}>
          <Text fontWeight={'bold'} fontSize={20}>
            S&apos;more
          </Text>
        </Box>
        <Box paddingRight={'15'}>
          <HStack>
            <Box paddingRight={'15'}>
              <Text fontWeight={'bold'}>ログイン</Text>
            </Box>
            <Box marginRight={'auto'}>
              <Button
                color={'white'}
                bg={'#CEA618'}
                px={'25px'}
                borderRadius={'full'}
                width={'150px'}
                alignItems={'center'}
                marginLeft={'auto'}
                marginRight={'auto'}
              >
                今すぐ始める
              </Button>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

const profile: React.FC<ProfileProps> = ({
  username = 'アカウント名',
  id = '@seitamuro',
}) => {
  const [articles, setArticles] = useState<ArticlesProps | []>([])
  const [categories, setCategories] = useState<CategoriesProps | []>([])

  useEffect(() => {
    axios.get('/api/hello').then((d) => {
      setArticles(JSON.parse(d.data.body).items)
    })
  }, [])

  useEffect(() => {
    axios.get('/api/category').then((d) => {
      setCategories(JSON.parse(d.data.body))
      console.log(JSON.parse)
    })
  }, [])

  return (
    <Container maxW="800px" centerContent>
      <ArticleHeader />
      <Avatar size="2xl" name={username} border="2px" />
      <Text>{username}</Text>
      <Text>{id}</Text>
      <Tabs align="center">
        <TabList>
          <Tab>未分類ブックマーク</Tab>
          <Tab>カテゴリ一覧</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Articles articles={articles} />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default profile
