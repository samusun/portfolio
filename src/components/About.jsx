import {
  Container,
  Text,
  useMantineTheme,
  Title,
  Blockquote,
  Image,
  Button,
} from "@mantine/core";
import samuelSC from "../assets/samuelSC.jpg";
import SamuelCV from "../assets/SamuelCV.pdf";

const PRIMARY_COL_HEIGHT = 300;

const About = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container className="text-slate-200 my-4">
      <Title className="text-cyan-400">About</Title>
      <Title order={4} italic>
        I'm Samuel Sundberg, a front-end developer with a love for technology,
        and a unique curiosity that drives me to challenge the conventional.
      </Title>
      <div className="flex flex-col-reverse md:flex-row-reverse md:space-x-reverse md:space-x-4">
        <div className="md:flex-1 md:pr-8">
          <Image
            width={300}
            radius="md"
            src={samuelSC}
            caption="Feeling excited before a 60k trail race in Norway"
            classNames={{ caption: "text-cyan-400" }}
          />
        </div>
        <div className="md:flex-2">
          <br />
          <Text>
            My journey towards technology began in the realm of the human body
            and mind. As a physiotherapy graduate, I cultivated a deep
            understanding of how the human body functions and how the mind
            perceives the world around us. It's this expertise that led me to my
            fascination with the nexus of technology and the human mind.
          </Text>
          <br />
          <Text>
            I've been immersed in the tech realm ever since I wrote my first
            line of code. Now, in 2023, my journey has seen me tackle projects
            ranging from crafting immersive UI/UX designs to building responsive
            and intuitive web applications. The last year I have been working
            fulltime building a complex insurance system with the aim of making
            the complicated feel easy.
          </Text>
          <br />
          <Text>
            What truly excites me about being a Front-End Developer is the
            opportunity to create meaningful digital interfaces that impact real
            lives. This passion extends beyond merely building websites or apps.
            It's about designing holistic experiences and devising solutions
            that empower users.
            <br /> <br /> A quote that really drives my perspective is from
            Antoine de Saint-Exupéry:
            <Blockquote className="text-cyan-400 text-3xl">
              “Perfection is achieved, not when there is nothing more to add,
              but when there is nothing left to take away.”
            </Blockquote>
            This quote aligns perfectly with my philosophy in front-end
            development. It's not about cluttering the interface with features,
            but about creating an experience that is smooth, intuitive, and
            efficient, stripping away the unnecessary until what's left truly
            serves the user's needs and solves their problems.
          </Text>
          <br />
          <Text>
            As I continue on my path, I strive to remain at the forefront of
            technological advancements, always eager to learn and grow. My
            journey in the tech world is driven by my ambition, curiosity, and
            the constant pursuit of knowledge, and I look forward to the
            innovative possibilities that lie ahead.
          </Text>
          <div className="flex justify-center p-8">
            <a href={SamuelCV} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-cyan-400"
                color="cyan"
                radius="xl"
                size="xl"
                uppercase
              >
                CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
