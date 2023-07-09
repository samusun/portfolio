import {
  createStyles,
  Text,
  Card,
  RingProgress,
  Group,
  Image,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function ProgressCard({ title, total, image, link, codelink }) {
  return (
    <Card className="p-0 m-0 border-2 border-cyan-400 bg-cyan-400 text-gray-800 font-medium">
      <Link href={link}>
        <div>
          <Text align="center" size="md">
            {title}
          </Text>

          <Image src={image} />
        </div>
      </Link>
      <a href={codelink}>
        <Text underline align="center">
          {codelink && "Code in Github"}
        </Text>
      </a>
    </Card>
  );
}
