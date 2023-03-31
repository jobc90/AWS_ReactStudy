/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const ModalButton = ({ onClick, children }) => {

    const modalButton = css`
        margin-right: 5px;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
        background-color: white;
        font-weight: 600;
        cursor: pointer;

        
        &:hover {
            background-color: #eee;
        }
        &:active {
            background-color: #dbdbdb;
        }
    `;

    return (
        <button css={modalButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default ModalButton;