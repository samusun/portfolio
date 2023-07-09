import { Container, Title, Text, Paper, Col, Card } from "@mantine/core";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapPin } from "react-icons/fa";

export default function Contact() {
  return (
    <Container className="text-slate-200 my-4">
      <Title className="text-cyan-400">Let's Connect!</Title>
      <Title order={4} italic>
        Reach out if you're interested in collaboration or if you have any
        questions. I'd love to hear from you!
      </Title>
      <div className="flex flex-col-reverse md:flex-row md:space-x-4">
        <div className="md:flex-1 md:pr-8">
          <Card className="p-8 bg-gray-800 text-white shadow-md rounded-md space-y-4">
            <Paper p="sm" className="flex items-center space-x-2 bg-gray-700">
              <FaPhone size={20} className="text-white" />
              <Text className="text-white">+46768233107</Text>
            </Paper>
            <Paper p="sm" className="flex items-center space-x-2 bg-gray-700">
              <FaEnvelope size={20} className="text-white" />
              <Text className="text-white">samuelsinkorg@gmail.com</Text>
            </Paper>
            <Paper p="sm" className="flex items-center space-x-2 bg-gray-700">
              <FaLinkedin size={20} className="text-white" />
              <Text>
                <a
                  href="https://www.linkedin.com/in/samuel-sundberg-7b86a41a9/"
                  className="underline text-cyan-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Text>
            </Paper>
            <Paper p="sm" className="flex items-center space-x-2 bg-gray-700">
              <FaMapPin size={20} className="text-white" />
              <Text className="text-white">Gothenburg, Sweden</Text>
            </Paper>
          </Card>
        </div>
        <div className="md:flex-2">
          <br />
          <Text>
            I'm based in Gothenburg, Sweden, but I'm open to opportunities from
            anywhere. If you would like to discuss a project, don't hesitate to
            reach out to me via phone, email, or LinkedIn.
          </Text>
          <br />
          <Text>Let's connect and create something great!</Text>
        </div>
      </div>
    </Container>
  );
}
