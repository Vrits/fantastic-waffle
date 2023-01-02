// import { Container, VStack, Flex, Text, Box, Button } from "@chakra-ui/react";

// const Home = () => {
//   return (
//     <Container maxWidth={"full"} p={"1"} mt="4">
//       <VStack align={"stretch"} w="full">
//         <Flex
//           alignItems={"center"}
//           w={"full"}
//           bg={"gray.50"}
//           height={"200px"}
//           // border={"solid black 1px"}

//         >
//           <Box w={"70%"}>
//             <Text fontSize={"4xl"} fontWeight={"bold"} mb={"4"}>
//               Lorem ipsum dolor sit.
//             </Text>
//             <Text fontSize={"2xl"}>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
//               corporis cumque doloremque ipsum sed libero itaque iure provident
//               sequi aut.
//             </Text>
//             <Button mt={"6"} colorScheme={"green"}>
//               {" "}
//               Cek Peyakit
//             </Button>
//           </Box>
//         </Flex>
//       </VStack>
//     </Container>
//   );
// };

// export default Home;

import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import doctorHero from "../assets/images/414.jpg";
import chakraHero from "../assets/images/Doctor_professional_team_cartoon_art_illustration.jpg";

const Home = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");

  return (
    <>
      <Flex
        alignItems="center"
        w="full"
        px={isLargerThan62 ? "16" : "6"}
        py="16"
        minHeight="90vh"
        justifyContent="space-between"
        flexDirection={isLargerThan62 ? "row" : "column"}
        mb={"4"}
      >
        <Box
          mr={isLargerThan62 ? "6" : "0"}
          w={isLargerThan62 ? "60%" : "full"}
        >
          <Text
            fontSize={isLargerThan62 ? "5xl" : "4xl"}
            fontWeight="bold"
            mb="4"
          >
            {" "}
            Cek Penyakit
          </Text>

          <Text mb="6" fontSize={isLargerThan62 ? "lg" : "base"} opacity={0.7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, corporis.
          </Text>
          <Link to={"/CekPenyakit"}>
            <Button
              w="200px"
              colorScheme="blue"
              variant="solid"
              h="50px"
              size={isLargerThan62 ? "lg" : "md"}
              mb={isLargerThan62 ? "0" : "10"}
            >
              CEK PENYAKIT
            </Button>
          </Link>
        </Box>

        <Spacer />

        <Flex
          w={isLargerThan62 ? "40%" : "full"}
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
        >
          <Image src={doctorHero} alt="Chakra UI" />
          {/* <Text ><i> Image Source </i></Text> */}
          <Text>
            <i>
              {" "}
              <a
                target={"_blank"}
                href="https://www.freepik.com/free-vector/online-doctor-consultation-illustration_11116009.htm#query=doctor&position=14&from_view=search&track=sph"
              >
                Image by redgreystock on Freepik
              </a>
            </i>
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        w="full"
        px={isLargerThan62 ? "16" : "6"}
        py="16"
        minHeight="90vh"
        justifyContent="space-between"
        flexDirection={isLargerThan62 ? "row" : "column"}
        mb={"4"}
      >
        <Box
          mr={isLargerThan62 ? "6" : "0"}
          w={isLargerThan62 ? "60%" : "full"}
        >
          <Text
            fontSize={isLargerThan62 ? "5xl" : "4xl"}
            fontWeight="bold"
            mb="4"
          >
            {" "}
            Daftar Penyakit
          </Text>

          <Text mb="6" fontSize={isLargerThan62 ? "lg" : "base"} opacity={0.7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, corporis.
          </Text>
          <Link to={"/DaftarPenyakit"}>
            <Button
              w="200px"
              colorScheme="blue"
              variant="solid"
              h="50px"
              size={isLargerThan62 ? "lg" : "md"}
              mb={isLargerThan62 ? "0" : "10"}
            >
              DAFTAR PENYAKIT
            </Button>
          </Link>
        </Box>

        <Spacer />

        <Flex
          w={isLargerThan62 ? "40%" : "full"}
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
        >
          <Image src={chakraHero} alt="Chakra UI" />
          {/* <Text ><i> Image Source </i></Text> */}
          <Text>
            <i>
              <a target={'_blank'} href="https://www.freepik.com/free-vector/doctor-professional-team-cartoon-art-illustration_15175440.htm#query=doctor&position=27&from_view=search&track=sph">
                Image by mamewmy on Freepik
              </a>
            </i>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
