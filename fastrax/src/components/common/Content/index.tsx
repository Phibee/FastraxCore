import React from 'react';
import styled from 'styled-components';

interface IProps {}

const ContentStyled = styled.div<IProps>`
     flex-grow: 1;
     padding: 10px 20px;
`;

export const Index: React.FC<IProps> = (props) => {
     return <ContentStyled {...props}>{props.children}</ContentStyled>;
};

export default Index;
