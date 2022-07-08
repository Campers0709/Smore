import { Box } from "@chakra-ui/react"
import type { NextPage } from "next"

const ChakraExample: NextPage = () => {
	return (
		<>
			<Box>This is box. Box equals to div</Box>
			<Box bg="tomato">背景を赤にする｡</Box>
		</>
	)
}

export default ChakraExample
