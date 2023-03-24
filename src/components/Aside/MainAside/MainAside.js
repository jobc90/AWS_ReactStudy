/** @jsxImportSource @emotion/react */
import { BsCardChecklist } from 'react-icons/bs';
import { GrTest } from 'react-icons/gr';
import { HiHome } from '@react-icons/all-files/hi/HiHome';
import { BiListCheck } from '@react-icons/all-files/bi/BiListCheck';
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import * as S from './style';

const MainAside = ( {children} ) => {
    return (
        <aside css={S.style}>
        <Navigation
        activeItemId="/"
        onSelect={({itemId}) => {
        }}
        items={[
          {
            title: 'Home',
            itemId: '/',
            elemBefore: () => <HiHome />
          },
          {
            title: 'T1',
            itemId: '/t1',
            elemBefore: () => <GrTest />
          },
          {
            title: 'T2',
            itemId: '/t2',
            elemBefore: () => <GrTest />
          },
          {
            title: 'Sample',
            itemId: '/sample',
            elemBefore: () => <BsCardChecklist />,
            subNav: [
                {
                    title: 'input1',
                    itemId: '/sample/input/1',
                    elemBefore: () => <BiListCheck />
                }
            ]
          }
        ]}
        />
        </aside>
    );
};

export default MainAside;