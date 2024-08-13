import React from 'react';
import Notes from './Note';
import { Note } from '../models/notemodep';
import { VStack } from '@chakra-ui/react';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    return (
        <VStack spacing={4} w="full">
            {notes.map(note => (
                <Notes key={note.id} note={note} handleDelete={handleDelete} />
            ))}
        </VStack>
    );
};

export default NotesList;
