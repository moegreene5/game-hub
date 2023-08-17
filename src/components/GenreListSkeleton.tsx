import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize={"32px"} borderRadius={8} />
          <SkeletonText fontSize="lg" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
