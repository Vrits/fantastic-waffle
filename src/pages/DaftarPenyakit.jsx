import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  StackDivider,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import PenyakitContext from "../context/PenyakitContext";

const DaftarPenyakit = () => {
  const { penyakit, gejala } = useContext(PenyakitContext);
  // console.log(penyakit[0].premis.split(" "));

  return (
    <Container maxW={"container.xl"} mb={'4'}>
      <Card>
        <CardHeader>
          <Heading size="md">Daftar Penyakit</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box> */}

            {penyakit.map((e, i) => (
              <Box key={e.code + i}>
                <Heading size="xs" textTransform="uppercase">
                  {e.name}
                </Heading>
                <Text pt="2" fontSize="sm">
                  Gejala :{" "}
                  {e.premis.split(" ").map((f,j, arr) => {

                    const findGejala = gejala.find((x) => x.code == f);
                    const str = arr.length - 1 == j ? `dan ${findGejala.name}.` : `${findGejala.name}, `
                    return str;
                  })}
                </Text>
              </Box>
            ))}

            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box> */}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DaftarPenyakit;
