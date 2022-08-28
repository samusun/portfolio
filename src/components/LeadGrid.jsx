import {
  Container,
  Grid,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import ProgressCard from "./ProgressCard";
import betmagic from "../assets/projects/betmagic.svg"
import crypto from "../assets/projects/crypto.svg"
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
            <ProgressCard total="10" title="Bet Magic"
             image={betmagic} link="https://main.dv5hj122gcmv0.amplifyapp.com/#/" codelink="https://github.com/samusun/BetMagic" />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard total="10" image={crypto} title="Crypto Hindsight" link="https://main.d3h2uqsm3wm71v.amplifyapp.com/#/" codelink="https://github.com/samusun/crypto-hindsight" />
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
