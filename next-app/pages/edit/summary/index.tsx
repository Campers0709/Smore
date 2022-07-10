import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const SummaryCreate: React.FC<{
  AirticleName: string
  AirticleUrl: string
  UserName: string
}> = (props) => {
  // const AirticleName = props.AirticleName
  // const AirticleUrl = props.AirticleUrl
  // const UserName = props.UserName
  const AirticleName = 'Reactで画像を表示する方法'
  const AirticleUrl = 'https://qiita.com/ytnd0928/items/22704b1c47c20e1bd83f'
  const UserName = 'Account'

  return (
    <>
      <ArticleHeader name={UserName} />
      <Box h={'10vh'}></Box>
      <Center>
        <Stack>
          <Box w={'70vw'}>
            <Heading size="md" color={'gray'}>
              要約作成
            </Heading>
            <Box h={'2vh'}></Box>
            <HStack>
              <Heading size="lg">{AirticleName}</Heading>
              <Text>{AirticleUrl}</Text>
            </HStack>
            <Box h={'5vh'}></Box>
            <HStack>
              {/* <Box w={'50vw'}>
                <iframe
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="500px"
                  height="500px"
                  src={AirticleUrl}
                ></iframe>
                <object
                  data="https://theuselessweb.com/"
                  width="500px"
                  height="500px"
                  type="text/html"
                ></object>
                <embed
                  type="text/html"
                  src={AirticleUrl}
                  width="500px"
                  height="500px"
                ></embed>
              </Box> */}
              <Box w={'100vw'}>
                <Textarea
                  placeholder="要約 200字程度でまとめてみよう"
                  h={'30vh'}
                />
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Center>
    </>
  )
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

export default SummaryCreate
