import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image as CImage,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { createRef, useEffect, useState } from 'react'
import type { Article } from '../../types/Article'
import Header from '../../components/Header'

type CategoriesProps = {
  categories: CategoryProps[]
}

type ArticleProps = {
  article: Article
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
            <Article article={article} />
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

// const Categorize = async (category_id: string, item_id: string) => {
//   const { status } = await axios.post('/api/category', { category_id, item_id })
// }

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="10px" maxW="200px">
      <Box bg="gray.100" w="200px" h="100px" display="flex" zIndex={2}>
        <ArticleMenu article={article} />
        {article.preview_image_url ? (
          <CImage src={article.preview_image_url} w="155px" />
        ) : (
          <></>
        )}
      </Box>
      <Text zIndex={1}>{article.tweet.substr(0, 30)}</Text>
    </Box>
  )
}

type CategoryMenuProps = {
  category_id: number
}

const ArticleMenu: React.FC<ArticleMenuProps> = ({ article }): JSX.Element => {
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [inputCategoryName, setInputCategoryName] = useState('')
  const user_id = localStorage.getItem('user_id')
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const categoryRef = createRef<HTMLInputElement>()

  const updateCategories = () => {
    axios.get(`/api/category?user_id=${user_id}`).then((d) => {
      setCategories(d.data.body.category)
    })
  }

  useEffect(() => {
    updateCategories()
  }, [user_id])

  const itemCategorize = async (category_id: number) => {
    const { data } = await axios.post('/api/item/categorize', {
      user_id,
      category_id: category_id,
      item_id: article.item_id,
    })
    if (data.body.status === 'OK') {
      updateCategories()
    }
  }

  return (
    <Menu>
      <MenuButton as={Button}>
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            localStorage.setItem('article', JSON.stringify(article))
            router.push('/edit/summary')
          }}
        >
          ????????????
        </MenuItem>
        <Divider />
        <MenuGroup title="????????????">
          {categories.map((d, i) => {
            return (
              <MenuItem
                key={i}
                onClick={async () => {
                  itemCategorize(d.category_id)
                }}
              >
                {d.category_name}
              </MenuItem>
            )
          })}
          <MenuItem onClick={onOpen}>???????????????????????????</MenuItem>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>????????????????????????</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  placeholder="????????????????????????"
                  ref={categoryRef}
                  onChange={(event: any) => {
                    setInputCategoryName(event.target.value)
                  }}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={async () => {
                    if (categoryRef.current !== null) {
                      await axios.post(`/api/category`, {
                        user_id,
                        category_name: inputCategoryName,
                      })
                      updateCategories()
                    } else {
                      console.log(`categoryRef.current is null`)
                    }
                    onClose()
                  }}
                >
                  ??????
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </MenuGroup>
        <MenuItem
          color="red.400"
          border="2px"
          onClick={() => console.log(`delete user_id='${user_id}'`)}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  category_id,
}): JSX.Element => {
  const user_id = localStorage.getItem('user_id')

  return (
    <Menu>
      <MenuButton as={Button}>
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() =>
            console.log(`????????????????????????????????? user_id='${user_id}'`)
          }
          as={Button}
        >
          ??????????????????
        </MenuItem>
        <Divider />
        <MenuItem
          color="red.400"
          border="2px"
          as={Button}
          onClick={() =>
            console.log(
              `??????????????? category_id='${category_id}' user_id='${user_id}'`
            )
          }
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

type ArticleMenuProps = {
  article: Article
}

const Categories: React.FC<CategoriesProps> = ({ categories }): JSX.Element => {
  return (
    <Wrap>
      {categories.map((category, key) => {
        return (
          <WrapItem key={key}>
            <Category
              category_id={category.category_id}
              category_name={category.category_name}
              length={category.length}
            />
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

type CategoryProps = {
  category_id: number
  category_name: string
  length: Number
  children?: JSX.Element | JSX.Element[]
}

const Category: React.FC<CategoryProps> = ({
  category_id,
  category_name,
  length,
}) => {
  return (
    <>
      <Box border="1px" borderColor="gray.200" borderRadius="10px">
        <Box
          bg="gray.200"
          w="200px"
          h="200px"
          display="flex"
          justifyContent="end"
          color="black"
        >
          <CategoryMenu category_id={category_id} />
        </Box>
        <Text>{category_name}</Text>
        <Text>???????????????: {`${length}`}</Text>
      </Box>
    </>
  )
}

const uid_key = 'user_id'
const username_key = 'name'
const at_twitter_id_key = 'username'

const Profile: NextPage = () => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [username, setUsername] = useState('')
  const [id, setID] = useState('')
  const [user_id, setUserID] = useState('')
  const [profile_image_url, set_profile_image_url] = useState('')

  useEffect(() => {
    const uid = localStorage.getItem(uid_key)
    const name = localStorage.getItem(username_key)
    const id = localStorage.getItem(at_twitter_id_key)
    const url = localStorage.getItem('profile_image_url')
    console.warn(uid, name, id, url)

    if (uid !== null) {
      setUserID(uid)
    } else {
      setUserID('')
    }
    if (name !== null) {
      setUsername(name)
    } else {
      setUsername('Account')
    }
    if (id !== null) {
      setID(id)
    } else {
      setID('@twitter_id')
    }
    if (url) {
      set_profile_image_url(url)
    }
  }, [])

  useEffect(() => {
    if (!user_id) return
    updateItems()
    updateCategories()
  }, [user_id])

  const updateItems = () => {
    axios.get(`/api/items?user_id=${user_id}`).then((d) => {
      setArticles(d.data.body.items)
    })
  }

  const updateCategories = () => {
    axios.get(`/api/category?user_id=${user_id}`).then((d) => {
      setCategories(d.data.body.category)
    })
  }

  const updateData = (index: number) => {
    console.log('updateData', index)
    if (index === 0) {
      updateItems()
    }
    if (index === 1) {
      updateCategories()
    }
  }

  return (
    <Container maxW="800px" centerContent>
      <Header name={username} />
      <Box h={'10vh'}></Box>
      <Avatar size="2xl" name={username} src={profile_image_url} border="2px" />
      <Box h={'3vh'}></Box>
      <Heading textAlign={'center'}>{username}</Heading>
      <Box h={'1vh'}></Box>
      <Text>{id}</Text>
      <Box h={'2vh'}></Box>
      <Tabs
        align="center"
        onChange={(index: number) => {
          updateData(index)
        }}
      >
        <TabList>
          <Tab fontWeight={'bold'}>???????????????????????????</Tab>
          <Tab fontWeight={'bold'}>??????????????????</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Articles articles={articles} />
          </TabPanel>
          <TabPanel>
            <Categories categories={categories} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default Profile
