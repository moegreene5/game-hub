import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import genres from "../data/genres";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const selectedGenre = useGenre(gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
