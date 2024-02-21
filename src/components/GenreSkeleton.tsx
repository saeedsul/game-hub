import { List, ListItem, Skeleton, Spinner } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <Skeleton height="20px" />
      <ListItem>
        <Skeleton />
        <Spinner />
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
