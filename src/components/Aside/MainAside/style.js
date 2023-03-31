import { css } from "@emotion/react";

export const MenuAside = css`
    position: absolute;
    top: 0px;
    left: -300px;
    z-index: 999;
    width: 300px;
    height: 800px;
    box-shadow: 1px 0px 5px 1px black;
    background-color: white;
    transition: left 1s ease;
`;

export const MenuButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -13px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0;
    width: 13px;
    height: 60px;
    cursor: pointer;

    background-color: #454545;
    color: rgb(255, 135, 122);

    &:hover, :active {
        background-color: #454545;
        text-shadow: 0px 0px 5px rgb(255, 80, 60);
    }
`;

export const AsideHeader = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px 20px 10px;

    background-color: rgb(255, 80, 60);
`;

export const HeaderTitleText = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    font-size: 25px;
    font-weight: 600;
`;

export const HeaderTitle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: white;
    padding: 0px 20px;
    font-size: 25px;
`;

export const NavigationList = css`
    padding-top: 20px;
`


export const style = css`
    display: flex;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    padding: 0px 20px;
    height: 40px;
    background-color: #303030;

    font-size: 16px;
    color: white;
`;