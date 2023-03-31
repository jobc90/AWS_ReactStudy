/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import { BiPlus } from 'react-icons/bi';
import { MdEventNote } from 'react-icons/md';

const AddNote = ({ onChange, onKeyUp, value, onAdd }) => {
    return (
        <div css={S.NoteHeader}>
            <h1 css={S.NoteTitle}>Note</h1>
            <div css={S.NoteAddition}>
                <i css={S.NoteIcon}><MdEventNote /></i>
                <input css={S.AdditionInput} type="text" placeholder="please enter new Note" onChange={onChange} onKeyUp={onKeyUp} value={value} />
                <button css={S.NoteAddButton} onClick={onAdd}><BiPlus /></button>
            </div>
        </div>
    );
};

export default AddNote;