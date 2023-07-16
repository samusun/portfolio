import { Text, Title, Card, Image } from "@mantine/core";
import React, { Profiler } from "react";
import profile from "../assets/profile.png";

export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <Card className="bg-black place-content-center">
          <Title className="text-cyan-400 pb-5 text-center">
            Building the future
          </Title>
          <Text className="text-slate-200 text-center text-lg leading-8">
            As a dedicated front-end developer, I strive to create seamless,
            high-value web experiences. <br />I currently work at an insurance
            company, developing tools to handle large-scale data
          </Text>
        </Card>
        <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
          <Image radius="md" alt="profile picture" src={profile} />
        </div>
      </div>
    </div>
  );
}
