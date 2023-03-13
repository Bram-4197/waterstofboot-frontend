import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

function HeroSections() {
  return (
    <Box
      // backgroundImage="url('/hero-background.jpg')"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="cover"

      display="flex"
      flexDirection="column"
      // justifyContent="center"
      alignItems="center"
      textAlign="center"
      py={100}
      px={4}
    >
      <Heading as="h1" size="2xl" mb={4}>
        Welkom op de ....
      </Heading>
      <Text fontSize="xl" mb={8}>
        Wij ...
      </Text>
    </Box>
  );
}

export default HeroSections;
