import {
    Box,
    Button,
    Center,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
const HomePage: NextPage = () => {
    return (
        <>
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
                            <Text fontWeight={'bold'} fontSize={20}>
                                S&apos;more
                            </Text>
                        </HStack>
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
            <Box h={1700} bg={'#F9F7F1'}>
                <Center>
                    <Stack>
                        <Box h={800} paddingTop={'200'} w={'140vh'}>
                            <VStack>
                                <Heading textAlign={'center'} size="2xl">
                                    S&apos;moreで記事を管理しよう
                                </Heading>
                                <Box paddingTop={'5'}>
                                    <Heading
                                        textAlign={'center'}
                                        size="2xl"
                                        textColor={'#4886B4'}
                                    >
                                        Twitterでいいねした記事
                                    </Heading>
                                </Box>
                                <Box>
                                    <Image
                                        src="/images/Group34.png"
                                        width={'960vw'}
                                        height={'600vh'}
                                        objectFit="contain"
                                        alt="My avatar"
                                    />
                                </Box>
                            </VStack>
                        </Box>

                        <Box h={300} paddingTop={'10vh'}>
                            <HStack>
                                <Box w={'50%'} paddingLeft={'8vw'}>
                                    <Image
                                        src="/images/bird_aoitori_bluebird.png"
                                        width={'260vw'}
                                        height={'260vh'}
                                        objectFit="contain"
                                        alt="My avatar"
                                    />
                                </Box>
                                <Box w={'50%'}>
                                    <Text fontWeight={'bold'} color={'gray'}>
                                        気軽なブックマーク
                                    </Text>
                                    <Heading size="lg">普段の通り</Heading>
                                    <Heading size="lg">
                                        <Text
                                            color={'#D4B303'}
                                            display={'inline'}
                                        >
                                            Twitterでいいね
                                        </Text>
                                        をたくさん押そう
                                    </Heading>
                                </Box>
                            </HStack>
                        </Box>
                        <Box h={300}>
                            <HStack>
                                <Box w={'60%'} paddingLeft={10}>
                                    <Text fontWeight={'bold'} color={'gray'}>
                                        行動を起こす期日が明確
                                    </Text>
                                    <Heading size="lg">
                                        2日で
                                        <Text
                                            color={'#D78100'}
                                            display={'inline'}
                                        >
                                            ブックマークが消えてしまう
                                        </Text>
                                    </Heading>
                                    <Heading size="lg">
                                        から後回しにせず取り組める！
                                    </Heading>
                                </Box>
                                <Box w={'40%'}>
                                    <Image
                                        src="/images/ninja_kumogakure.png"
                                        width={'260vw'}
                                        height={'260vh'}
                                        objectFit="contain"
                                        alt="My avatar"
                                    />
                                </Box>
                            </HStack>
                        </Box>
                        <Box h={300}>
                            <HStack>
                                <Box w={'50%'} paddingLeft={'10vw'}>
                                    <Image
                                        src="/images/ai_computer_sousa_robot.png"
                                        width={'260vw'}
                                        height={'260vh'}
                                        objectFit="contain"
                                        alt="My avatar"
                                    />
                                </Box>
                                <Box w={'50%'}>
                                    <Text fontWeight={'bold'} color={'gray'}>
                                        S&apos;moreアシスト
                                    </Text>
                                    <Heading size="lg">AIの導入で</Heading>
                                    <Heading size="lg">
                                        <Text
                                            color={'#931212'}
                                            display={'inline'}
                                        >
                                            より質の高い
                                        </Text>
                                        サマリ作成をサポート！
                                    </Heading>
                                </Box>
                            </HStack>
                        </Box>
                    </Stack>
                </Center>
            </Box>
            <Box bg={'#ECD661'}>
                <Box
                    h={'20vh'}
                    bg={'#F9F7F1'}
                    display={'flex'}
                    borderBottomLeftRadius={'50%'}
                    borderBottomRightRadius={'50%'}
                ></Box>
            </Box>
            <Box h={'50vh'} bg={'#ECD661'} display={'flex'}>
                <Box
                    marginTop={'auto'}
                    marginBottom={'auto'}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                >
                    <Center>
                        <VStack>
                            <Heading textAlign={'center'}>
                                記事管理をもっと気軽に。もっと確実に。
                            </Heading>
                            <Box paddingTop={10}></Box>
                            <Button
                                color={'white'}
                                bg={'#68540C'}
                                px={'25px'}
                                borderRadius={'10'}
                                h={'60px'}
                                width={'300px'}
                                alignItems={'center'}
                                marginLeft={'auto'}
                                marginRight={'auto'}
                            >
                                <Text fontSize={'2xl'}>今すぐ始める</Text>
                            </Button>
                        </VStack>
                    </Center>
                </Box>
            </Box>
            <Box h={10} bg={'#F9F7F1'}></Box>
            <Box h={60} bg={'#F9F7F1'}>
                <Center>
                    <HStack align={'Top'} spacing={'20vh'}>
                        <Box height={32}>
                            <HStack align={'Top'}>
                                <Image
                                    src="/images/IMG_0528.PNG"
                                    width={64}
                                    height={64}
                                    objectFit="contain"
                                    alt="My avatar"
                                />
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={20}
                                    paddingTop={'20px'}
                                >
                                    S&apos;more
                                </Text>
                            </HStack>
                        </Box>

                        <Stack>
                            <Text fontWeight={'bold'} color={'gray'}>
                                サービスについて
                            </Text>

                            <Text fontWeight={'bold'}>S&apos;moreとは</Text>
                            <Text fontWeight={'bold'}>便利な機能</Text>
                            <Text fontWeight={'bold'}></Text>
                        </Stack>
                        <Stack>
                            <Text fontWeight={'bold'} color={'gray'}>
                                サポート
                            </Text>
                            <Text fontWeight={'bold'}>利用規約</Text>
                            <Text fontWeight={'bold'}>
                                プライバシーポリシー
                            </Text>
                            <Text fontWeight={'bold'}>お問合せ</Text>
                        </Stack>
                    </HStack>
                </Center>
            </Box>
        </>
    )
}

export default HomePage
