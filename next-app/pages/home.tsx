import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const ChakraExample: NextPage = () => {
  return (
    <>
      <Box
        paddingTop={"5"}
        h={"10vh"}
        position={"fixed"}
        bg={"white"}
        w={"100%"}
      >
        <HStack justify={"space-between"}>
          <Box paddingLeft={"20"}>
            <Text fontWeight={"bold"} fontSize={20}>
              S&apos;more
            </Text>
          </Box>
          <Box paddingRight={"15"}>
            <HStack>
              <Box paddingRight={"15"}>
                <Text fontWeight={"bold"}>ログイン</Text>
              </Box>
              <Box marginRight={"auto"}>
                <Button
                  color={"white"}
                  bg={"#CEA618"}
                  px={"25px"}
                  borderRadius={"full"}
                  width={"150px"}
                  alignItems={"center"}
                  marginLeft={"auto"}
                  marginRight={"auto"}
                >
                  今すぐ始める
                </Button>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Box h={2000} bg={"#F9F7F1"}>
        <Box h={500} paddingTop={"200"}>
          <Heading textAlign={"center"} size="2xl">
            S&apos;moreで記事を管理しよう
          </Heading>
          <Box paddingTop={"5"}>
            <Heading textAlign={"center"} size="2xl" textColor={"#4886B4"}>
              Twitterでいいねした記事
            </Heading>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChakraExample;
