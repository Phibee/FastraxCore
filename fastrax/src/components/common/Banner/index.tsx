import React from 'react';
import styled from 'styled-components';

interface IProps {}

const BannerStyled = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     min-height: 40px;
     background: #4e4e4e;
     border-bottom-left-radius: 25px;
     border-bottom-right-radius: 25px;
     padding: 10px 20px;
`;

export const Index: React.FC<IProps> = (props) => {
     return <BannerStyled {...props}>{props.children}</BannerStyled>;
};

export default Index;
