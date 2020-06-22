import React from 'react';
import styled from 'styled-components';

interface IProps {
     isBannerVisible?: true | false;
}

const ContentSidebaTopStyled = styled.div<IProps>`
     background: white;
     min-height: 100%;
     ${(props) =>
          props.isBannerVisible ? 'border-top-left-radius: 25px' : ''};
     padding-top: 10px;
     padding-left: 15px;
`;

const ContentSidebarStyled = styled.div<IProps>`
     width: 250px;
     background: #4e4e4e;
`;

export const Index: React.FC<IProps> = (props) => {
     return (
          <ContentSidebarStyled {...props}>
               <ContentSidebaTopStyled isBannerVisible={props.isBannerVisible}>
                    {props.children}
               </ContentSidebaTopStyled>
          </ContentSidebarStyled>
     );
};

export default Index;
