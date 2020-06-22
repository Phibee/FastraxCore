import React from 'react';
import styled from 'styled-components';

interface IProps {}

const FooterStyled = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     height: 43px;
     max-height: 43px;
     background: #4e4e4e;
     border-top-left-radius: 50px;
     border-top-right-radius: 50px;
     margin-left: 20px;
     margin-right: 20px;
`;

export const Index: React.FC<IProps> = (props) => {
     return <FooterStyled {...props}>{props.children}</FooterStyled>;
};

export default Index;
