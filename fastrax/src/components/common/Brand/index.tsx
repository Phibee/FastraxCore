import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {
     logo?: string;
}

const BrandStyle = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     max-height: 40px;
     padding: 8px 10px;
`;

const ImageStyle = styled.img`
     width: 100%;
     height: 100%;
     object-fit: contain;
`;

export const Index: React.FC<IProps> = (props) => {
     return (
          <BrandStyle {...props}>
               <ImageStyle src={props.logo} />
          </BrandStyle>
     );
};

export default Index;
