import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';



export default function ProgressCard({ title, total }) {
  return (
    <Card>
      <div >
        <div>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: total, color: "violet" }]}
            label={
              <Text  align="center" size="md">
            {title}
          </Text>
            }
          />
        </div>
      </div>
    </Card>
  );
}