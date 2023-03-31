import { css } from "@emotion/react";

export const NoteHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
`;

export const NoteTitle = css`
    margin: 15px 0px 5px 20px;
    font-size: 36px;
    font-weight: 600;
`;

export const NoteAddition = css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 0px 15px 0px 50px;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 70%;
    height: 35px;
`;

export const NoteIcon = css`
    font-size: 20px;
    margin: 8px;

`;

export const AdditionInput = css`
    padding: 0 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;
    border: none;
    outline: none;
    &:focus {
        border: none;
        padding: 0px 10px;
    }
`;

export const NoteAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;

    border: none;
    padding: 5px 10px;
    height: 100%;

    font-size: 20px;
    background-color: #fffff000;
    
    cursor: pointer;
    &:hover {
        transform: translateY(-50%) scale(1.2);
        border: none;
    }
`;