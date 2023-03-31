import { css } from "@emotion/react";

export const ContentHeader = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 20%;
`;

export const Date = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    font-weight: 600;
    line-height: 15px, #dbdbdb;
`;

export const Time = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
    font-weight: 600;
`;

export const ContentBody = css`
    padding: 10px;
    height: 45%;
    word-break: keep-all;
    line-height: 25px, #dbdbdb;
    font-weight: 600;
`;

export const ContentFooter = css`
    display: flex;
    justify-content: flex-end;
    height: 15%;
    padding: 10px;
    padding-top: 0;
`;