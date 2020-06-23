import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

interface IProps {
     logo?: string;
}

const BrandStyle = styled.div<IProps>`
     flex-grow: 0;
     flex-shrink: 0;
     padding: 8px 10px;
     height: 77px;
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
