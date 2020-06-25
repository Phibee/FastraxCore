import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const SidebarStyled = styled.div<IProps>`
     flex-grow: 1;
     ul {
          list-style: none;
          margin: 0;
          padding: 15px 0;
     }
     ul li a {
          display: block;
          padding: 10px 15px;
     }
     ul li.nav_title {
          font-size: 8pt;
          text-transform: uppercase;
          letter-spacing: 0.03rem;
          font-weight: 500;
          color: #bfbfbf;
          margin-bottom: 5px;
          margin-left: 15px;
     }
     ul li a.active {
          border-right: 2px solid #f9ad47;
          background-color: #f2f2f2;
     }

     ul li a > i {
          margin-right: 8px;
          color: ${(props) => props.theme.color.accent} !important;
     }

     ul li a > i,
     ul li a > span {
          display: inline-block;
          vertical-align: middle;
     }

     ul li a > span {
          color: ${(props) => props.theme.color.primary} !important;
     }
`;

export const Index: React.FC<IProps> = (props) => {
     return <SidebarStyled {...props}>{props.children}</SidebarStyled>;
};

export default Index;
