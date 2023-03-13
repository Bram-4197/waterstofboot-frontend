import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  const sponsors = [
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor1",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor2",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    {
      name: "test",
      logo: "https://logodix.com/logo/1961524.png",
      website: "https://example.com/sponsor3",
    },
    // add more sponsors here...
  ];
  return (
    <Flex py={6} justify="center" align="center" flexDirection="column">
      <Text fontWeight="bold" mb={2}>
        Sponsors
      </Text>
      <Flex justify="center" wrap="wrap">
        {sponsors.map((sponsor) => (
          <Box
            key={sponsor.website}
            mx={4}
            my={2}
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              filter: "none",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            filter="grayscale(1)"
          >
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.website} logo`}
                maxW="100px"
              />
            </a>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Footer;
