/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from './style.js';
import NoteListButton from './NoteListButton/NoteListButton.js';
import { BsPencilSquare } from 'react-icons/bs';
import { TbTrashOff } from 'react-icons/tb';
import bgImage1 from '../../../images/background1.png';
import bgImage2 from '../../../images/background2.png';
import bgImage3 from '../../../images/background3.png';
import bgImage4 from '../../../images/background4.png';


const NoteList = ({ note, openModal, onRemove }) => {
    const bgImageList = [bgImage1, bgImage2, bgImage3, bgImage4];
    const bgIndex = (note.id-1) % bgImageList.length ;
    const colorList = ['white', 'rgb(255, 80, 60)', 'white', 'white'];
    const colorIndex = (note.id-1) % bgImageList.length ;
    
    const NoteContainer = css`
        margin: 10px;
        width: 230px;
        height: 230px;
        box-shadow: 0px 0px 5px 1px #dbdbdb;
        cursor: pointer;
        transition: box-shadow 0.3s ease;
        color: ${colorList[colorIndex]};
        background-image: url(${bgImageList[bgIndex]});
        /* background-image: url(${bgImageList[bgIndex]}); */
        background-size: cover;
        /* background-size: 230px 230px; 배경 이미지 크기 설정 */
        &:hover {
            box-shadow: 0px 0px 10px 1px #121212;
        }
    `;


    return (
        <div css={NoteContainer} key={note.id}>
            <div css={S.ContentHeader}>
                <div css={S.Date}>{note.date}</div>
                <div css={S.Time}>{note.time}</div>
            </div>
            <div css={S.ContentBody}>
                {note.content}
            </div>
            <div css={S.ContentFooter}>
                <NoteListButton onClick={() => openModal(note.id)}><BsPencilSquare /></NoteListButton>
                <NoteListButton onClick={() => onRemove(note.id)}><TbTrashOff /></NoteListButton>
            </div>
        </div>
    );
};

export default NoteList;