import Nav from "@/components/Navbar";
import {
  Container,
  Heading,
  Stack,
  Text,
  Icon,
  Image,
  Box,
  useColorModeValue,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      {" "}
      <Nav />
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
        >
          <Box boxSize="350px">
            <Image
              src={useColorModeValue("./mainPhoto.png", "./main.png")}
              alt=""
            />
          </Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Charles N. Nybeze{" "}
            <Text as={"span"} color={"#C16C4F"}>
              The Third
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Acq. Founder turned{" "}
            <Text as={"span"} color={"#C16C4F"} fontSize="16px">
              <TypeAnimation
                sequence={[
                  "fullstack developer",
                  1000,
                  "nft trader",
                  1000,
                  "designer",
                  1000,
                  "community builder",
                  1000,
                  "content creator",
                  1000,
                ]}
                speed={30}
                deletionSpeed={70}
                wrapper="span"
                repeat={Infinity}
              />{" "}
            </Text>
          </Text>
          <Text>Let's connect?</Text>
          <Stack
            spacing={6}
            direction={"row"}
            color={useColorModeValue("black", "white")}
          >
            <Box border="2px" borderRadius="full" p="4">
              <Center>
                <Icon color="#C16C4F" boxSize="20px" as={FaTwitter} p="0" />
              </Center>
            </Box>
            <Box border="2px" borderRadius="full" p="4">
              <Center>
                <Icon color="#C16C4F" boxSize="20px" as={FaLinkedinIn} />
              </Center>
            </Box>

            <Box border="2px" borderRadius="full" p="4">
              <Center>
                <Icon color="#C16C4F" boxSize="20px" as={RiGithubLine} />
              </Center>
            </Box>

            <Box border="2px" borderRadius="full" p="4">
              <Center>
                <Icon color="#C16C4F" boxSize="20px" as={GrMail} />
              </Center>
            </Box>

            <Box border="2px" borderRadius="full" p="4">
              <Center>
                <Icon color="#C16C4F" boxSize="20px" as={AiOutlineMedium} />
              </Center>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
