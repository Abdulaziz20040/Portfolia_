import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import TitleButton from "../Components/TitleButton";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiAntdesign,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSass,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "SCSS", icon: SiSass, color: "#CC6699" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#563D7C" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  { name: "Ant Design", icon: SiAntdesign, color: "#1890FF" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const Skills = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      maxWidth={"1300px"}
      m={"auto"}
      mt={20}
      id="skills"
      p={{ base: 2, md: 5, lg: 0 }}
    >
      <Box width={"100%"}>
        <TitleButton title={"skills that matters"} />
        <Flex gap={5} justifyContent={"left"} alignItems={"center"}>
          <Text textTransform={"uppercase"} fontSize={"45px"} fontWeight={700}>
            my skills
          </Text>
        </Flex>
      </Box>

      <Box m={"auto"}>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={5}>
          {skillsData.map((skill, index) => (
            <Box
              background={
                isDark
                  ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))"
                  : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"
              }
              borderRadius="10px"
              p={5}
              height={"160px"}
              width={"100%"}
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={skill.icon} boxSize={10} color={skill.color} />
              <Text textAlign={"center"} fontWeight={600} mt={2}>
                {skill.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
