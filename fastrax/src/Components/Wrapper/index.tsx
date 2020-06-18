import React from 'react';
import styled from 'styled-components';

interface IProps {}

const WrapperLayout = styled.div`
     height: 100vh;
     min-height: 100vh;
     margin: 0;
     padding: 0;
     display: flex;
     flex-direction: column;
`;

export const Index: React.FC = (props) => {
     return <WrapperLayout {...props}>{props.children}</WrapperLayout>;
};

export default Index;
