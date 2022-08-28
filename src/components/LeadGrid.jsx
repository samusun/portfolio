import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import ProgressCard from "./ProgressCard";
const PRIMARY_COL_HEIGHT = 300;

const LeadGrid = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <Grid gutter="md">
          <Grid.Col span={6}>
            <ProgressCard total="10" title="Running" />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard total="10" title="Music" />
          </Grid.Col>
          <Grid.Col>
            <ProgressCard
            total="30" title="Programming" 
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard   total="30"
              title="Adventures"
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true} />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard
              total="10"
              title="Other Skills"
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default LeadGrid;
