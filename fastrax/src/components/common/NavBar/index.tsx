import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';
import invert from 'invert-color';

interface IProps {}

const NavBarStyled = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     height: 45px;
     padding: 0 10px;
     background: ${(props) => props.theme.bgColor.primary};

     ul.inline-list {
          display: block;
     }
     ul.inline-list li {
          display: inline-block;
     }
     ul.inline-list li a {
          display: block;
          padding: 11px 15px;
          color: ${(props) => invert(props.theme.color.primary)};
     }
     ul.inline-list li a > i {
          color: #ffffff;
          vertical-align: middle;
          color: ${(props) => invert(props.theme.color.primary)};
     }
`;

export const Index: React.FC<IProps> = (props) => {
     return <NavBarStyled {...props}>{props.children}</NavBarStyled>;
};

export default Index;
