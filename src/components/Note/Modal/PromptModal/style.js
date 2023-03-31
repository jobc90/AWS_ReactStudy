import { css } from "@emotion/react";

export const modalContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: #000000aa;
`;

export const modalBox = css`
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;

export const modalHeader = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 20px;
    height: 20%;
`;

export const modalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;

export const modalMain = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 0px 10px;
    height: 50%;

    font-size: 15px;
`;

export const modalInput = css`
    outline: none;
    border: none;
    margin-top: 10px;
    border-bottom: 1px solid #dbdbdb;
    background-color: #fafafa;
    width: 100%;
    height: 35px;

    text-align: center;
`;

export const modalFooter = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px 10px 20px 0px;
    height: 35%;

    font-size: 15px;
`;