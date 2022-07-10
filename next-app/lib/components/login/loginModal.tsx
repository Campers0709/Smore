import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

export const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = (
  props
) => {
  const [inputTwitterName, setInputTwitterName] = useState('')
  const router = useRouter()

  const saveTwitterName = async () => {
    const { data } = await axios.post('/api/getHiddenTwitterId', {
      user_name: inputTwitterName,
    })
    localStorage.setItem('user_id', data.user_id)
    localStorage.setItem('name', data.name)
    localStorage.setItem('username', data.username)
    localStorage.setItem('profile_image_url', data.profile_image_url)
    router.push('/profile')
    // window.location.replace('http://127.0.0.1:3000/profile')
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign={'center'}>
              <Image
                src="/images/IMG_0528.PNG"
                width={300}
                height={70}
                objectFit="contain"
                alt="My avatar"
              />
            </Box>
            <Heading textAlign={'center'}>S&apos;moreへようこそ</Heading>
            <div>@以降のtwitter idを入力してください</div>
            <div>
              <input
                type="text"
                onChange={(event) => {
                  setInputTwitterName(event.target.value)
                }}
              />
            </div>

            <Button
              color={'white'}
              bg={'#079EF3'}
              px={'25px'}
              borderRadius={'full'}
              width={'250px'}
              alignItems={'center'}
              marginLeft={'auto'}
              marginRight={'auto'}
              onClick={async () => {
                saveTwitterName()
              }}
            >
              Twitterでログイン
            </Button>

            <VStack>
              <Box h={'7vh'}></Box>
              <NextLink href="/profile" passHref>
                <Button
                  color={'white'}
                  bg={'#079EF3'}
                  px={'15px'}
                  borderRadius={'full'}
                  width={'250px'}
                  alignItems={'center'}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                >
                  Twitterで新規登録
                </Button>
              </NextLink>
              <Box h={'5vh'}></Box>
              <Text>または</Text>
              <Box h={'5vh'}></Box>
              <Button
                color={'white'}
                bg={'#079EF3'}
                px={'25px'}
                borderRadius={'full'}
                width={'250px'}
                alignItems={'center'}
                marginLeft={'auto'}
                marginRight={'auto'}
              >
                Twitterでログイン
              </Button>
              <Box h={'5vh'}></Box>
              <Box w={'15vw'}>
                <Text fontSize={'8px'} margin={'auto'} textAlign={'center'}>
                  続行することで S&apos;moreの利用規約に同意し、
                  S&apos;moreのプライバシーポリシーを読んだものと みなされます
                </Text>
              </Box>
              <Box h={'5vh'}></Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginModal
