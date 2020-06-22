import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const ButtonLayout = styled.button<IProps>``;

export const Index: React.FC<IProps> = (props) => {
     return <ButtonLayout {...props}>{props.children}</ButtonLayout>;
};

export default Index;
