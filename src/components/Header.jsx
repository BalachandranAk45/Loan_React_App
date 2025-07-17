import React from "react";
import { Flex, Box, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import { useSidebar } from '../context/SidebarContext'; // If you build a context for sidebar toggling

const Header = () => {
  // In a real app, you might use a context to toggle the sidebar on mobile
  const { onOpen } = useDisclosure(); // Placeholder for opening mobile sidebar

  return (
    <Flex
      as="header"
      position="fixed" // Keep header fixed at the top
      top="0"
      left="0"
      right="0"
      width="100%"
      bg="brand.900" // Using our custom color
      color="white"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="md"
      zIndex="sticky" // Ensure header stays on top
      height="60px" // Fixed height for header
    >
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        display={{ base: "flex", lg: "none" }} // Show only on mobile
        onClick={onOpen} // This would trigger a mobile sidebar drawer
        variant="ghost"
        colorScheme="whiteAlpha"
      />
      <Text fontSize="xl" fontWeight="bold" ml={{ base: 0, lg: 4 }}>
        Loan Management App
      </Text>
      <Box>{/* User profile/settings can go here */}</Box>
    </Flex>
  );
};

export default Header;
