import { Container, VStack, Box, Text, Button, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import PenyakitContext from "../context/PenyakitContext";
import GetPenyakit from "../components/Content/GetPenyakit";

const CekPenyakit = () => {
  const { gejala, selectedGejala, onSelectGejala } =
    useContext(PenyakitContext);

  return (
    <Container
      maxWidth={"container.lg"}
      //   centerContent
      my="4"
      //   bg={"gray.100"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text fontSize={"3xl"}>Pilih gejala yang dirasakan :</Text>
      <VStack spacing={4} w="full" p={4}>
        {gejala.map((e, i) => (
          <Box
            w={"full"}
            px={"4"}
            py={"1"}
            textAlign={"center"}
            bg={"gray.100"}
            borderRadius="lg"
            border="solid 3px "
            borderColor={
              selectedGejala.find((x) => x.code == e.code)
                ? "green.200"
                : "gray.200"
            }
            transition={".5s"}
            _hover={{
              bg: "gray.200",
              borderColor: selectedGejala.find((x) => x.code == e.code)
                ? "green.200"
                : "gray.500",
              // borderColor: "gray.500",
            }}
            cursor={"pointer"}
            key={`${e.code}`}
            onClick={() => {
              onSelectGejala(e.code, e.name);
            }}
          >
            <Text fontSize={"2xl"}>
              {i + 1}. {e.name}
            </Text>
          </Box>
        ))}
      </VStack>
      <Text fontSize={"3xl"} mt={"4"}>
        Gejala yang dipilih :
      </Text>

      <VStack alignItems={"start"} my={"2"}>
        {selectedGejala.length < 1 && (
          <Text fontSize={"xl"}>Tidak ada gejala yang dipilih</Text>
        )}
        {selectedGejala.map((e, i) => (
          <Flex
            justifyContent={"space-between"}
            key={`${e.code + i}`}
            w={"full"}
            p={"5"}
            border={"1px black solid"}
            borderRadius={"lg"}
          >
            <Text fontSize={"xl"}>
              {i + 1}. {e.name}
            </Text>
            <Button
              alignSelf={"end"}
              colorScheme={"red"}
              onClick={() => {
                onSelectGejala(e.code, e.name);
              }}
            >
              <DeleteIcon />
            </Button>
          </Flex>
        ))}
      </VStack>

      <GetPenyakit />
    </Container>
  );
};

export default CekPenyakit;
