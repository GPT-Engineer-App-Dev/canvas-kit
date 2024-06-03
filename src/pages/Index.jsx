import { Container, Text, VStack, Box, Flex, Spacer, Button, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, error, isLoading } = useEvents();

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
      {isLoading && <Text>Loading events...</Text>}
      {error && <Text>Error loading events: {error.message}</Text>}
      {events && (
        <Table variant="simple" mt={8}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Venue ID</Th>
              <Th>Is Pinned</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event) => (
              <Tr key={event.id}>
                <Td>{event.name}</Td>
                <Td>{event.date}</Td>
                <Td>{event.description}</Td>
                <Td>{event.venue_id}</Td>
                <Td>{event.is_pinned ? "Yes" : "No"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default Index;