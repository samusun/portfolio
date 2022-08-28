import { Button, MantineProvider, Text } from "@mantine/core";
import LeadGrid from "./components/LeadGrid";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { Navbar, Header } from "@mantine/core";
import MyAppShell from "./components/MyAppShell";

export default function App() {
  return (
    <div>
      <MyAppShell />
    </div>
  );
}
