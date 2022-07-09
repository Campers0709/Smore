import { 
    Avatar,
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
    WrapItem
} from "@chakra-ui/react";
import { jsx } from "@emotion/react";

type ArticleProps = {
    title: string;
    url: string;
    limit: string;
    time: string;
    ai_summary?: string;
}

type ArticlesProps = {
    articles: ArticleProps[]
}

const Articles: React.FC<ArticlesProps>  = ({
    articles
}): JSX.Element => {
    return (
        <Wrap>
            {articles.map((article, _) => {
                return (
                <WrapItem>
                    <Article
                        title={article.title}
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

const ArticleHeader: React.FC<{}> = props => {
    return (
        <Stack direction="row" spacing={4}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
        </Stack>
    )
}

const profile: React.FC<ProfileProps> = ({username = "アカウント名", id = "@seitamuro"}) => {

    const articles = [
        {
            title: "Title",
            url: "hoge",
            time: "forever",
            limit: "forever",
            ai_summary: "AI summary"
        },
        {
            title: "Title",
            url: "hoge",
            time: "forever",
            limit: "forever",
            ai_summary: "AI summary"
        },
        {
            title: "Title",
            url: "hoge",
            time: "forever",
            limit: "forever",
            ai_summary: "AI summary"
        },
        {
            title: "Title",
            url: "hoge",
            time: "forever",
            limit: "forever",
            ai_summary: "AI summary"
        }
    ]
    return (
        <Container maxW="800px" centerContent>
            <ArticleHeader />
            <Avatar
                size="2xl"
                name={username}
            />
            <Text>{username}</Text>
            <Text>{id}</Text>
            <Tabs align="center">
                <TabList>
                    <Tab>未分類ブックマーク</Tab>
                    <Tab>カテゴリ一覧</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Articles
                            articles={articles}
                        />
                    </TabPanel>
                    <TabPanel>2</TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default profile;