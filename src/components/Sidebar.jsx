import React from "react";
import {
  Box,
  VStack,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdAttachMoney,
  MdReceipt,
  MdReport,
} from "react-icons/md";

const menuItems = [
  { name: "Dashboard", path: "/", icon: MdDashboard },
  { name: "Customers", path: "/customers", icon: MdPeople },
  { name: "Loans", path: "/loans", icon: MdAttachMoney },
  { name: "Repayments", path: "/repayments", icon: MdReceipt },
  { name: "Reports", path: "/reports", icon: MdReport },
];

const Sidebar = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  // On smaller screens, you'd typically have a drawer/modal for the sidebar
  // For this example, we'll hide it on small screens and show a fixed one on large.
  if (!isLargeScreen) {
    return null; // Or render a mobile drawer component
  }

  return (
    <Box
      as="nav"
      width={{ base: "full", lg: "250px" }}
      bg="gray.800"
      color="white"
      p={4}
      minH="calc(100vh - 60px)" // Full height minus header
      mt="60px" // Align with content below header
      position="sticky"
      top="60px" // Stick right below the header
      left="0"
      zIndex="base"
      overflowY="auto"
      display={{ base: "none", lg: "block" }} // Only display on large screens by default
    >
      <VStack align="stretch" spacing={2}>
        {menuItems.map((item) => (
          <Button
            as={NavLink}
            key={item.name}
            to={item.path}
            variant="ghost"
            justifyContent="flex-start"
            _activeLink={{ bg: "brand.700", color: "white" }} // Style for active link
            _hover={{ bg: "gray.700" }}
            leftIcon={<item.icon />}
            py={6} // Increase padding for bigger buttons
          >
            <Text fontSize="lg">{item.name}</Text>
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
