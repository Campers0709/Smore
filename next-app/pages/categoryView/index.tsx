import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
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
import { useEffect, useState } from 'react'
import type { Article } from '../../types/Article'
import Header from '../../components/Header'

type CategoriesProps = {
  categories: string[]
}

type ArticlesProps = {
  articles: Article[]
}

const Articles: React.FC<ArticlesProps> = ({ articles }): JSX.Element => {
  return (
    <Wrap>
      {articles.map((article, key) => {
        return (
          <WrapItem key={key}>
            <Article
              item_id={article.item_id}
              tweet={article.tweet}
              user_text={article.user_text}
              url={article.url}
              ai_summary={article.ai_summary}
            />
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

const Article: React.FC<Article> = ({
  tweet,
  user_text,
  item_id,
  url,
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
      <Text>{tweet}</Text>
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
      <Header name={username} />
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
