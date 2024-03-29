import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
const color = require('color');
const classNames = require('classnames');

export interface IInputProps {
     rounded?: boolean;
     shadow?: boolean;
     text?: string;
}

const InputStyled = styled.input<IInputProps>`
     position: relative;
     visibility: hidden;
     margin-right: 14px;
     cursor: pointer;
     &:before {
          content: '';
          position: absolute;
          visibility: visible;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          top: -3px;
          left: 0;
          border: 0.09rem solid #eaeaea;
          transition: 0.2s all ease-in;
     }

     &:after {
          content: '\\e901';
          position: absolute;
          font-family: 'ams-icons' !important;
          font-style: normal;
          font-weight: normal;
          font-feature-settings: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          z-index: 1000;
          color: #fff;
          visibility: visible;
          top: 4px;
          left: 6px;
          font-size: 9px;
     }

     &:checked:before {
          background: ${(props) => props.theme.color.secondary};
          border: 1.5px solid ${(props) => props.theme.color.secondary};
          box-shadow: 0 5px 13px -6px ${(props) => props.theme.color.secondary};
     }
`;

const InputWrapperStyled = styled.label`
     cursor: pointer;
     user-select: none;
     padding: 6px 5px;
     display: inline-block;
`;

export const Index: React.FC<
     IInputProps &
          HTMLAttributes<HTMLInputElement> &
          React.InputHTMLAttributes<HTMLInputElement>
> = ({ text, ...props }) => {
     return (
          <InputWrapperStyled>
               <InputStyled type="checkbox" {...props} />
               {text && <span>{text}</span>}
          </InputWrapperStyled>
     );
};

export default Index;
