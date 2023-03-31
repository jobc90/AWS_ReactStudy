/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';


const MainContainer = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;



const Container = ({ children }) => {
    return (
      <div css={MainContainer}>
        {children}
      </div>
    );
};

export default Container;

