import React from 'react';
import { Note } from '../models/notemodep';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
    return (
        <Box bg={note.color} p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md">{note.title}</Heading>
            <Text>{note.text}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">{note.date}</Text>
            <Button mt={4} colorScheme="red" size="sm" onClick={() => handleDelete(note.id)}>Delete</Button>
        </Box>
    );
};

export default Notes;
