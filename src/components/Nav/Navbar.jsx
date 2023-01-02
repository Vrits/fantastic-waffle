import React, { useState } from "react";
import { Text, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const pageLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Daftar Penyakit",
      link: "/DaftarPenyakit",
    },
    {
      name: "Cek Penyakit",
      link: "/CekPenyakit",
    },
  ];

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={"whiteAlpha.300"}
      backdropFilter={"blur(4px)"}
    >
      <Link to={'/'}>
      <Text fontSize="xl" fontWeight="bold">
        Sistem Pakar
      </Text>
      </Link>

      <Spacer />

      <Flex alignItems="center">
        {pageLink.map((e, i) => (
          <Link to={e.link} key={`1${i}`}>
            <Text
              fontSize="md"
              mr="10"
              cursor={"pointer"}
              p={"3"}
              borderRadius={"lg"}
              transition={".5s"}
              _hover={{ bg: "green.100" }}
            >
              {e.name}
            </Text>
          </Link>
        ))}
        {/* <Text fontSize="md">Daftar Penyakit</Text> */}
      </Flex>
    </Flex>
  );
};

export default Nav;
