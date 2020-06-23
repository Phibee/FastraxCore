import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const NavBarStyled = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     height: 45px;
     padding: 0 10px;
     background: #4e4e4e;

     ul.inline-list {
          display: block;
     }
     ul.inline-list li {
          display: inline-block;
     }
     ul.inline-list li a {
          display: block;
          padding: 11px 15px;
     }
     ul.inline-list li a > i {
          color: #ffffff;
          vertical-align: middle;
     }
`;

export const Index: React.FC<IProps> = (props) => {
     return <NavBarStyled {...props}>{props.children}</NavBarStyled>;
};

export default Index;
