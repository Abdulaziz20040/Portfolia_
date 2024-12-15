import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const Social = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <ButtonGroup>
      <Button
        style={{
          gap: 20,
          marginTop: 4,
        }}
        py={6}
        px={2}
        w={"fit-content"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
        boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
        borderRadius="7px"
        _hover={{
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <a href="https://github.com/Abdulaziz20040">
          <FaGithub />
        </a>
        <a href="https://t.me/Ican_wokey">
          <FaTelegramPlane />
        </a>
      </Button>
    </ButtonGroup>
  );
};

export default Social;
