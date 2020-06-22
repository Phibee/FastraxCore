import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const SidebarStyled = styled.div<IProps>`
     flex-grow: 1;
`;

export const Index: React.FC<IProps> = (props) => {
     return <SidebarStyled {...props}>{props.children}</SidebarStyled>;
};

export default Index;
