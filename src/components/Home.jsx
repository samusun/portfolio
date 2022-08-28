import { Text, Title, Card, Image } from '@mantine/core'
import React, { Profiler } from 'react'
import profile from "../assets/profile.png"

export default function Home() {
  return (
    <div>
        <div className='bg-black'  >
        <Card className='bg-black place-content-center'>
        <Title className="text-cyan-400 pb-5 text-center" >Building the future</Title>
        <Text className="text-slate-200 text-center text-lg leading-8" >
            My ambition is to make an impact in the world of Web Development. <br/> I wish to create web experiences
            with minimal friction and maximum value. <br/>
            At the moment I'm working full time at an insurance company where I make tools to handle massive amounts of data.
        </Text>
        </Card>
        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }} >
        <Image radius="md" alt="profile picture" src={profile} />
        </div>
        </div>
    </div>
  )
}
