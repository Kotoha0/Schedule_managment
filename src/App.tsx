import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Flex, VStack, theme } from '@chakra-ui/react';
import Header from './components/Header';
import NotesList from './components/Notelist';
import CreateNotes from './components/Createnote';
import { Note } from './models/notemodep';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Exam",
    text: "Mathmatic exam",
    color: "#FFEBF0",
    date: (new Date()).toString()
  }]);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#F7FAFC" minH="100vh">
        <Header />
        <Flex direction="column" align="center" mt={10}>
          <VStack spacing={8} w="full" maxW="lg" px={4}>
            <NotesList notes={notes} setNotes={setNotes} />
            <CreateNotes notes={notes} setNotes={setNotes} />
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
