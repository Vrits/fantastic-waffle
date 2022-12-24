import { Container, VStack, Center, Text } from "@chakra-ui/react";



function App() {
  return (
    <Container w={"container.xl"} >
      <VStack spacing={4} w={'full'} >
        <Center w={"full"} bg={'gray.100'}>
          <Text fontSize={"4xl"}>tes 1</Text>
        </Center>
        <Center w={"full"} bg={'gray.100'}>
          <Text fontSize={"4xl"}>tes 2</Text>
        </Center>
        <Center w={"full"} bg={'gray.100'}>
          <Text fontSize={"4xl"}>tes 3</Text>
        </Center>
      </VStack>
    </Container>
  );
}

export default App;
