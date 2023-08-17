import { List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <Skeleton />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
