/** @jsxImportSource @emotion/react */
import { BsCardChecklist } from 'react-icons/bs';
import { GrTest } from 'react-icons/gr';
import { BiListCheck } from '@react-icons/all-files/bi/BiListCheck';
import { HiUsers } from 'react-icons/hi';
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import { useNavigate } from 'react-router-dom';
import { GoChecklist } from 'react-icons/go';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { SiMicrosoftonenote } from 'react-icons/si';
import * as S from './style';
import { useState } from 'react';


const MainAside = ( {children} ) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const handleMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };

    

    return (
        <aside css={[S.MenuAside, isOpen && { left: "0px", zIndex: "99" }]}>
          <button css={S.MenuButton} onClick={handleMenuButtonClick}>
            {isOpen ? "◀" : "▶"}
          </button>
          <header css={S.AsideHeader}>
            <h1 css={S.HeaderTitle}>
              <SiMicrosoftonenote />
                <div css={S.HeaderTitleText}>Note</div>
            </h1>
          </header>
          <div css={S.NavigationList}>
            <Navigation
            activeItemId="/"
            onSelect={({ itemId }) => {
                navigate(itemId);
            }}
            items={[
              {
                title: 'Note',
                itemId: '/note',
                elemBefore: () => <SiMicrosoftonenote />,
              },
              {
                title: 'T1',
                itemId: '/t1',
                elemBefore: () => <GrTest />,
              },
              {
                title: 'T2',
                itemId: '/t2',
                elemBefore: () => <GrTest />,
              },
              {
                title: 'Sample',
                itemId: '/sample/input/1',
                elemBefore: () => <BsCardChecklist />,
                subNav: [
                    {
                        title: 'input1',
                        itemId: '/sample/input/1',
                        elemBefore: () => <BiListCheck />,
                    }
                ]
              },
              {
                title: 'List',
                itemId: '/users',
                elemBefore: () => <BsCardChecklist />,
                subNav: [
                    {
                        title: '사용자 전체 조회',
                        itemId: '/users',
                        elemBefore: () => <HiUsers />,
                    }
                ]
              },
              {
                title: 'Todo',
                itemId: '/todo',
                elemBefore: () => <BsFillCalendarCheckFill />,
                subNav: [
                    {
                        title: 'Todo list',
                        itemId: '/todo',
                        elemBefore: () => <GoChecklist />,
                    }
                ]
              },
              {
                title: 'ToDo2',
                itemId: '/todo2',
                elemBefore: () => <BsFillCalendarCheckFill />,
                subNav: [
                    {
                        title: 'Todo list2',
                        itemId: '/todo2',
                        elemBefore: () => <GoChecklist />,
                    }
                ]
              },
              {
                title: 'NumberCounter',
                itemId: '/number/count',
                elemBefore: () => <BsFillCalendarCheckFill />,
                subNav: [
                    {
                        title: 'NumberCounter',
                        itemId: '/number/count',
                        elemBefore: () => <GoChecklist />,
                    }
                ]
              }
            ]}
            />
          </div>
        </aside>
    );
};

export default MainAside;