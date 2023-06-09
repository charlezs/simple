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
  Link,
  Center,
  HStack,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles The Third</title>
        <meta name="description" content="Meet Charles N. Nyabeze" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
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
          <Center>
            <Text p="0">Connect w/ me!</Text>
          </Center>

          <HStack
            spacing={6}
            direction={"row"}
            color={useColorModeValue("black", "white")}
            px="6"
          >
            <Link
              href="https://twitter.com/intent/user?screen_name=learn_charles"
              isExternal
            >
              <Box border="2px" borderRadius="full" p="4">
                <Center>
                  <Icon color="#C16C4F" boxSize="20px" as={FaTwitter} p="0" />
                </Center>
              </Box>
            </Link>
            <Link
              href="https://www.linkedin.com/in/charles-nyabeze/"
              isExternal
            >
              <Box border="2px" borderRadius="full" p="4">
                <Center>
                  <Icon color="#C16C4F" boxSize="20px" as={FaLinkedinIn} />
                </Center>
              </Box>
            </Link>

            <Link href="https://github.com/charlezs" isExternal>
              <Box border="2px" borderRadius="full" p="4">
                <Center>
                  <Icon color="#C16C4F" boxSize="20px" as={RiGithubLine} />
                </Center>
              </Box>
            </Link>

            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=charlesnnyabeze@gmail.com"
              isExternal
            >
              <Box border="2px" borderRadius="full" p="4">
                <Center>
                  <Icon color="#C16C4F" boxSize="20px" as={GrMail} />
                </Center>
              </Box>
            </Link>

            <Link href="https://medium.com/@char1es" isExternal>
              <Box border="2px" borderRadius="full" p="4">
                <Center>
                  <Icon color="#C16C4F" boxSize="20px" as={AiOutlineMedium} />
                </Center>
              </Box>
            </Link>
          </HStack>
        </Stack>
      </Container>
    </>
  );
}
