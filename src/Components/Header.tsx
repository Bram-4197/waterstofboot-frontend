import {
  Button,
  Divider,
  Flex,
  Image,
  Img,
  useColorMode,
} from "@chakra-ui/react";
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
      >
        <MdHome />
        {colorMode != "dark" ? (
          <Image src={Moon} onClick={toggleColorMode} paddingTop={1}></Image>
        ) : (
          <Image src={Sun} onClick={toggleColorMode} paddingTop={1}></Image>
        )}
      </Flex>
    </div>
  );
}

export default Header;
