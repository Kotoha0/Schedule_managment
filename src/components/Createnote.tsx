import React from 'react';
import { Note } from '../models/notemodep';
import { VStack, Button, FormControl, FormLabel, Input, Textarea, Alert } from '@chakra-ui/react';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }

        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: titleRef.current?.value || "",
            text: textRef.current?.value || "",
            color: colorRef.current?.value || "#FFEBF0",
            date: (new Date()).toString()
        }]);

        if (titleRef.current) titleRef.current.value = "";
        if (textRef.current) textRef.current.value = "";
    }

    return (
        <>
            {error && <Alert status="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} w="full">
                    <FormControl id="title">
                        <FormLabel>Title</FormLabel>
                        <Input ref={titleRef} placeholder="Enter Title for the Note" />
                    </FormControl>
                    <FormControl id="text">
                        <FormLabel>Text</FormLabel>
                        <Textarea ref={textRef} placeholder="Enter your notes" />
                    </FormControl>
                    <FormControl id="color">
                        <FormLabel>Color</FormLabel>
                        <Input type="color" ref={colorRef} defaultValue="#FFEBF0" />
                    </FormControl>
                    <Button type="submit" colorScheme="pink" size="md">Submit</Button>
                </VStack>
            </form>
        </>
    );
};

export default CreateNotes;
