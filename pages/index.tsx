import Nav from "@/components/Navbar";
import { Container, Heading, Stack, Text, Icon } from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

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
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Charles N. Nybeze{" "}
            <Text as={"span"} color={"red"}>
              The Third
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Acq. Founder turned{" "}
            <Text as={"span"} color={"red"}>
              dev/ trader
            </Text>
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Icon as={FaTwitter} />
            <Icon as={FaLinkedinIn} />
            <Icon as={RiGithubLine} />
            <Icon as={GrMail} />
            <Icon as={AiOutlineMedium} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
