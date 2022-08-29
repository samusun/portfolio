import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Image,
} from "@mantine/core";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import logo from "../assets/logo.svg"
import Calc from "./Calc";
import About from "./About"
import Contact from "./Contact"



export default function MyAppShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      className="bg-black"
      styles={{
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
        className="bg-black text-white p-5 "
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <div className="pt-20">
          <Title onClick={() => setOpened((o) => !o)} size="h1" weight="100" className="p-3" >
          <Link to="projects">Projects</Link>
          </Title>
          <Title onClick={() => setOpened((o) => !o)} size="h1" weight="100" className="p-3" >
          <Link to="about" >About</Link>
          </Title>
          <Title onClick={() => setOpened((o) => !o)} size="h1" weight="100" className="p-3" >
          <Link to="contact">Contact</Link>
          </Title>
          </div>
        </Navbar>
      }
      header={
        <Header height={70} p="sm" className="bg-black">
          <div
            style={{ display: "flex", alignItems: "center",
            justifyContent: "space-between", height: "100%", width: "100%", margin:"0"}}
          >
              <Link to="/">
                <Image src={logo}/>
            </Link>
            <MediaQuery  largerThan="sm" styles={{ display: "none" }}>
              <Burger
              
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          </div>
        </Header>
      }
    >
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="calc" element={<Calc />} />
        
      </Routes>
    </AppShell>
  );
}
