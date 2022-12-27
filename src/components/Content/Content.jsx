import { Container, VStack, Center, Text } from "@chakra-ui/react";

const arr = ["1", "2", "3"];

const Content = () => {
  return (
    <Container maxWidth={"container.lg"} height='1000px' centerContent mt="4" bg={'gray.100'}>
      <VStack spacing={4} w="full" p={4}>
        {arr.map((e, i) => (
          <Center
            w={"full"}
            bg={"gray.100"}
            borderRadius="lg"
            border="solid 1px "
            borderColor={"gray.200"}
            transition={".5s"}
            _hover={{
              bg: "gray.200",
              borderColor: "gray.500",
            }}
            key={`key${i}`}
          >
            <Text fontSize={"4xl"}>tes {e} </Text>
          </Center>
        ))}
      </VStack>
    </Container>
  );
};

export default Content;
