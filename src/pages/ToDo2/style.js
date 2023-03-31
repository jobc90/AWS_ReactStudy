import { css } from "@emotion/react";

export const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    width: 900px;
`;

export const ToDoTitle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    height: 40px;
    text-align: center;
    
`;

export const ToDoInputbody = css`
    display: flex;
    border: 1px solid #dbdbdb;
    width: 380px;
    height: 25px;
    text-align: left;
`;

export const ToDoInput = css`
    display: flex;
    border: 1px solid #dbdbdb;
    width: 100px;
    height: 25px;
    text-align: left;
`;

export const AddButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 50px;
    height: 25px;
`;

export const ToDoContentmain = css`
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    width: 800px;
    height: 600px;
`;

export const TodoContentList = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 40px;
    border: 1px solid #dbdbdb;
    text-align: center;
`;

export const TodoContentbody = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 400px;
    height: 40px;
    text-align: left;
`;


export const TodoContent = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    border: 1px solid #dbdbdb;
    width: 120px;
    height: 40px;
`;


export const ContentButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 1px solid #dbdbdb;
    width: 50px;
    height: 25px;
    
`;