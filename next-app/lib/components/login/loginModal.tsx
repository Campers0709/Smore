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

export const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = (
    props
) => {
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
                        <Heading textAlign={'center'}>
                            S&apos;moreへようこそ
                        </Heading>
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
                                <Text
                                    fontSize={'8px'}
                                    margin={'auto'}
                                    textAlign={'center'}
                                >
                                    続行することで
                                    S&apos;moreの利用規約に同意し、
                                    S&apos;moreのプライバシーポリシーを読んだものと
                                    みなされます
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
