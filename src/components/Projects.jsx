import { Title, Container, Grid, SimpleGrid } from "@mantine/core";
import projectList from "../assets/projects/projectlist";
import ProgressCard from "./ProgressCard";

const LeadGrid = () => {
  return (
    <Container my="md">
      <Title className="text-cyan-400 pb-4">Some Projects</Title>
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <Grid gutter="md">
          {projectList.map((project, index) => {
            return (
              <Grid.Col span={project.span} key={index}>
                <ProgressCard
                  image={project.image}
                  title={project.title}
                  link={project.link}
                  codelink={project.codelink}
                  radius="md"
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default LeadGrid;
