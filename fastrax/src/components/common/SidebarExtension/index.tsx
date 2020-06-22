import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const SidebarExtensionLayout = styled.div<IProps>`
     display: flex;
     flex-grow: 0;
     flex-shrink: 0;
     min-height: 43px;
     background: #4e4e4e;
     border-top-right-radius: 50px;
`;

export const Index: React.FC<IProps> = (props) => {
     return (
          <SidebarExtensionLayout {...props}>
               {props.children}
          </SidebarExtensionLayout>
     );
};

export default Index;
