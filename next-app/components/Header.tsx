import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Avatar,
  Box,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

const Header: FC<{ name: string }> = ({ name }) => {
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
                <Avatar name={name} src={profile_image_url} border="2px" />
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

export default Header
