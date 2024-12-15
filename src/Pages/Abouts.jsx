import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import about from "../assets/about.png";
import star from "../assets/star.png";
import icon2 from "../assets/icon2-2.png";
import TitleButton from "../Components/TitleButton";

const Abouts = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      maxWidth={"1300px"}
      m={"auto"}
      mt={20}
      id="about"
      display={{ base: "block", sm: "block", md: "flex", lg: "flex" }}
      gap={{ base: 5, sm: 5, md: 10, lg: 10 }}
      p={{ base: 2, md: 5, lg: 0 }}
    >
      <Box
        background={
          isDark
            ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))"
            : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"
        }
        borderRadius="30px"
        p={5}
        flexBasis={"30%"}
        mb={{ base: 5, md: 0, lg: 0 }}
        h={{ base: "auto", sm: "300px", md: "290px", lg: "500px" }}
      >
        <Image
          src="https://i.pinimg.com/736x/08/b8/17/08b81731a173e97bb8960ae25a5802fd.jpg"
          bgGradient="linear(to-tr, #87CEEB, #87CEFA)"
          borderRadius="3xl"
          position="relative"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box flexBasis={"60%"}>
        <TitleButton title={"know me here"} />
        <Box
          display={"flex"}
          gap={5}
          justifyContent={"left"}
          alignItems={"center"}
          my={{ base: 2, md: 0, lg: 0 }}
          mx={{ base: 1, md: 0, lg: 0 }}
        >
          <Image
            src={star}
            height={{ base: "20px", sm: "20px", md: "30px", lg: "40px" }}
          />
          <Text
            textTransform={"uppercase"}
            fontSize={{ base: "25px", sm: "25px", md: "35px", lg: "45px" }}
            fontWeight={700}
          >
            About
          </Text>
          <Image
            src={star}
            height={{ base: "20px", sm: "20px", md: "30px", lg: "40px" }}
          />
        </Box>
        <Box
          background={
            isDark
              ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))"
              : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"
          }
          borderRadius="30px"
          p={5}
          width={"100%"}
        >
          <Image
            src={icon2}
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          />
          <Text
            fontSize={{ base: "25px", sm: "30px", md: "25px", lg: "45px" }}
            fontWeight={700}
          >
            <Text as="span" textColor={"#FD185E"}>
              Abdushukurov{" "}
            </Text>{" "}
            Abdulaziz
          </Text>
          <Text
            fontSize={{ base: "20px", sm: "30px", md: "20px", lg: "25px" }}
            fontWeight={700}
          >
            Frontend Web Developer
          </Text>
          <Text mt={5} textColor={isDark ? "" : "#636363"} fontSize={"sm"}>
            Hello! I am Abdulaziz, a professional Frontend Developer. I work
            with modern technologies such as React, TypeScript, Tailwind CSS. I
            have experience in database, UI/UX design, and web solutions.
            <br />
            🔹age: 20 years old
            <br />
            🔹My place of residence: Tashkent, Uzbekistan
            <br />
            🔹Languages: Uzbek
            <br />
            My goal My goal is to create intuitive, effective, and user-friendly
            websites and to continuously improve my experience.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Abouts;
