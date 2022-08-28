import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import LeadGrid from "./LeadGrid";


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
        className="bg-black text-white"
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Link to="about">Projectsss</Link>
          <Link to="about" >About</Link>
          <Link to="about">Contact</Link>
        </Navbar>
      }
      header={
        <Header height={70} p="md" className="bg-black text-white">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
              <Link to="/">
                <Text>Samuel Sundberg</Text>
            </Link>
          </div>
        </Header>
      }
    >
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<LeadGrid />} />
      </Routes>
    </AppShell>
  );
}
