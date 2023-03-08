import { Button, Divider, Flex, Img, useColorMode } from "@chakra-ui/react";
import React from "react";
import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import { MdHome } from "react-icons/md";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        paddingLeft={2}
        position="fixed"
        borderBottomWidth={10}
      >
        <MdHome />
        <Button onClick={toggleColorMode}>
          {colorMode != "dark" ? (
            <img src={Moon} onClick={toggleColorMode}></img>
          ) : (
            <img src={Sun} onClick={toggleColorMode}></img>
          )}
        </Button>
      </Flex>
      <Divider />
    </div>
  );
}

export default Header;
