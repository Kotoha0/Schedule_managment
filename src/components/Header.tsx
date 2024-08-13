import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex as="header" bg="#FFC1E3" p={4} justifyContent="center">
      <Box>
        <Heading size="lg" color="white">Schedule Management</Heading>
      </Box>
    </Flex>
  );
};

export default Header;



