import { Container, Text, VStack, Box, Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">My React Canvas</Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha">
          Home
        </Button>
        <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
          About
        </Button>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;