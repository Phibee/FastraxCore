import React from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {}

const SidebarExtensionLayout = styled.div<IProps>`
     display: flex;
     flex-grow: 0;
     flex-shrink: 0;
     height: 43px;
     background: #4e4e4e;
     border-top-right-radius: 50px;
     ul {
          display: flex;
          width: 100%;
          flex-direction: row;
          padding: 0 25px 0 20px;
     }
     ul li {
          display: flex;
          flex-grow: 1;
          flex-shrink: 1;
          justify-content: center;
          align-items: center;
     }
     ul li a {
          padding: 0 15px;
     }
     ul li a > i {
          color: #ffffff;
          vertical-align: middle;
     }
`;

export const Index: React.FC<IProps> = (props) => {
     return (
          <SidebarExtensionLayout {...props}>
               {props.children}
          </SidebarExtensionLayout>
     );
};

export default Index;
