import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar />
        <Box flex="1" p={{ base: 4, md: 6 }} mt="60px" overflowY="auto"> {/* Adjust mt for header height */}
          <Outlet /> {/* This is where your page components will render */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;