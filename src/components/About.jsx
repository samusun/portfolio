import {
    Container,
Text,
    useMantineTheme,
  } from "@mantine/core";

  
  const PRIMARY_COL_HEIGHT = 300;
  
  const About = () => {
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  
    return (
      <Container my="md">
        <Text className="text-white"> About</Text>
      </Container>
    );
  };
  
  export default About;
  