import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const NavBarStyled = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     min-height: 40px;
     padding: 8px 10px;
     background: #4e4e4e;
`;

export const Index: React.FC<IProps> = (props) => {
     return <NavBarStyled {...props}>{props.children}</NavBarStyled>;
};

export default Index;
