/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import PromptModal from "../../components/Note/Modal/PromptModal/PromptModal";
import NoteList from "../../components/Note/NoteList/NoteList";
import AddNote from "../../components/Note/AddNote/AddNote";




const NoteContainer = css`
    margin: 10px auto;
    width: 550px;
    height: 100%;
    
`;

export const NotePage = css`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px 20px 20px;
    width: 95%;
    height: 88%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        color: rgb(255, 80, 60);
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(255, 80, 60, 0.3);
        border-radius: 5px;
    }
`;



const Note = () => {
    const nowDate = new Date();

    const convertDay = (day) => {
        return day === 0 ? "일" 
            : day === 1 ? "월"
            : day === 2 ? "화"
            : day === 3 ? "수"
            : day === 4 ? "목"
            : day === 5 ? "금" : "토";
    }

    const [isOpen, setIsOpen] = useState(false);

    const [modifyNote, setModifyNote] = useState({
        id: 0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        date: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
        time: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
        content: ''
    });
    const [noteList, setNoteList] = useState([]);
    const noteId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        const note = {
            ...input,
            id: noteId.current++
        }
        setNoteList([...noteList, note]);
        setInput({
            ...input, 
            content: ''
        });
    }

    const onRemove = (id) => {
        setNoteList(noteList.filter(
            note => {
                return note.id !== id;
            }
        ))
    }

    const updateNote = (modifyNote) => {
        setNoteList(
            noteList.map(
                note => {
                    if(note.id === modifyNote.id) {
                        note.content = modifyNote.content;
                    }
                    return note;
                }
            )
        )
    }

    const openModal = (id) => {
        setModifyNote(noteList.filter(
            note => note.id === id
        )[0]);

        setIsOpen(true);
    }

    return (
        
        <div css={NoteContainer}>
            <AddNote onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
            <div css={NotePage}>
                {noteList.map(
                    note => {
                        return (
                            <NoteList note={note} openModal={openModal} onRemove={onRemove}/>
                        );
                    }
                )}
            </div>
            {isOpen ? (<PromptModal title={'Edit Note'} note={modifyNote} setIsOpen={setIsOpen} updateNote={updateNote} />) : ''}
        </div>
    );
};

export default Note;