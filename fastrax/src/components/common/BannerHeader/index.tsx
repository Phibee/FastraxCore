import React from 'react';
import styled from 'styled-components';
import { ImageResources } from '../../../assets';
import invert from 'invert-color';

interface IProps {
     title?: String;
     subTitle?: String;
}

const BannerHeaderTitleStyled = styled.h1<IProps>`
     margin: 0;
     padding: 0;
     font-size: 14pt;
     color: ${(props) => invert(props.theme.color.primary)};
`;

const BannerHeaderSubTitleStyled = styled.h5<IProps>`
     margin: 0;
     padding: 0;
     font-size: 10pt;
     font-weight: 300;
     margin-top: 4px;
     color: ${(props) => invert(props.theme.color.primary)};
`;

const BannerHeaderWrapperStyled = styled.div<IProps>`
     display: inline-block;
     position: relative;
     min-height: 39px;
     &:after {
          content: '';
          position: absolute;
          bottom: -11px;
          width: 150px;
          height: 5px;
          background-color: #f9ad48;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
     }
`;

export const Index: React.FC<IProps> = (props) => {
     return (
          <BannerHeaderWrapperStyled>
               <BannerHeaderTitleStyled>
                    <img
                         src={ImageResources.FsxSquareThumb}
                         style={{ width: 12, marginRight: 5 }}
                    />
                    {props.title}
               </BannerHeaderTitleStyled>
               <BannerHeaderSubTitleStyled>
                    {props.subTitle}
               </BannerHeaderSubTitleStyled>
          </BannerHeaderWrapperStyled>
     );
};

export default Index;
