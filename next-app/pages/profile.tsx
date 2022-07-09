import { 
    Box,
    Container,
    Center,
    VStack,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Wrap,
    WrapItem
} from "@chakra-ui/react";

type ArticleProps = {
    title: string;
    url: string;
    limit: string;
    time: string;
    ai_summary?: string;
}

const Article: React.VFC<ArticleProps> = ({
    title = "タイトル",
    url = "seitamuro.blog",
    limit = "できたて",
    time = "10秒",
    ai_summary = "できたてでおいしい"
}) => {
    return (
        <Box border="1px" borderColor="gray.200" borderRadius="10px">
            <Box bg="gray.200" w="200px" h="200px" />
            <Text>{title}</Text>
            <Text>{limit}</Text>
            <Text>{time}</Text>
            <Text>{ai_summary}</Text>
        </Box>
    )
}

type ProfileProps = {
    username: string;
    id: string;
}

const profile: React.VFC<ProfileProps> = ({username = "アカウント名", id = "@seitamuro"}) => {
    return (
        <Container maxW="800px" centerContent>
            <Text>{username}</Text>
            <Text>{id}</Text>
            <Tabs align="center">
                <TabList>
                    <Tab>未分類ブックマーク</Tab>
                    <Tab>カテゴリ一覧</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Center>
                            <VStack>
                        <Wrap display="incline-block">
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                            <WrapItem>
                                <Article />
                            </WrapItem>
                        </Wrap>
                        </VStack>
                        </Center>
                    </TabPanel>
                    <TabPanel>2</TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default profile;