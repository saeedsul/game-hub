import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  // const handlClick = (platform: Platform) => {
  //     onSelectPlatform(platform);
  //   };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Releveance</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
