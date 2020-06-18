import React from 'react';
import styled from 'styled-components';

interface IProps {
     position?: 'right' | 'left';
     width?: Number;
}

const AsideLayout = styled.aside<IProps>`
     height: 100vh;
     width: ${(props) => (props.width ? props.width + 'px' : '320px')};
     order: ${(props) => (props.position === 'right' ? 1 : 0)};
     display: inline-flex;
`;

export const Index: React.FC<IProps> = (props) => {
     return <AsideLayout {...props}>{props.children}</AsideLayout>;
};

export default Index;
