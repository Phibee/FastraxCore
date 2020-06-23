import React from 'react';
import styled from 'styled-components';

interface IProps {
     position?: 'right' | 'left';
     width?: Number;
}

const AsideLayout = styled.aside<IProps>`
     height: 100vh;
     width: ${(props) => (props.width ? props.width + 'px' : '20%')};
     max-width: 300px;
     order: ${(props) => (props.position === 'right' ? 1 : 0)};
     display: inline-flex;
     flex-direction: column;
     box-shadow: 3px 0 13px -3px #dedede;
`;

export const Index: React.FC<IProps> = (props) => {
     return <AsideLayout {...props}>{props.children}</AsideLayout>;
};

export default Index;
