import {
  Container,
  Grid,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import ProgressCard from "./ProgressCard";
import betmagic from "../assets/projects/betmagic.svg"
import crypto from "../assets/projects/crypto.svg"
import calc from "../assets/projects/calc.svg"
import onboarding from "../assets/projects/onboarding.svg"
import nft from "../assets/projects/nft.svg"

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
            <ProgressCard 
            total="10" 
            image={nft} title="NFT Castle" 
            link="https://auth-development-d9fe8.firebaseapp.com/"
            codelink="https://github.com/samusun/happyhacking"
             />
          </Grid.Col>
        <Grid.Col span={6}>
            <ProgressCard
              total="10"
              title="Onboarding"
              link="https://github.com/samusun/onboarding"
              codelink="https://github.com/samusun/onboarding"
              height={SECONDARY_COL_HEIGHT}
              image={onboarding}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          
      
          <Grid.Col>
            <ProgressCard
            total="30" title="Code for THIS site" link="https://github.com/samusun/portfolio"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard total="10" title="Bet Magic"
             image={betmagic} link="https://main.dv5hj122gcmv0.amplifyapp.com/#/" codelink="https://github.com/samusun/BetMagic" />
          </Grid.Col>
      
          <Grid.Col span={6}>
            <ProgressCard   total="30"
              title="Loan Calculator"
              height={SECONDARY_COL_HEIGHT}
              link="/calc"
              radius="md"
              image={calc}
              codelink="https://github.com/samusun/loanCalculator"
              animate={true} />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProgressCard total="10" image={crypto} title="Crypto Hindsight" link="https://main.d3h2uqsm3wm71v.amplifyapp.com/#/" codelink="https://github.com/samusun/crypto-hindsight" />
          </Grid.Col>
        </Grid>
       
      </SimpleGrid>
    </Container>
  );
};

export default LeadGrid;
