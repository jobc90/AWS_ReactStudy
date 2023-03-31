/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const ItemButton = css`
    display: flex;
    align-items: center;
    border: none;
    color: white;
    background-color: #ffffff00;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        color: #121212;
        scale: 1.5;
    }
`;

const NoteListButton = ({ onClick, children }) => {
    return (
        <button css={ItemButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default NoteListButton;