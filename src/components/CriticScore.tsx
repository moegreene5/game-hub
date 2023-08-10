import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 89 ? "green" : score > 79 ? "yellow" : score > 69 ? "red" : "";

  return (
    <Badge colorScheme={color} paddingX={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
