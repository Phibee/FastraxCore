import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Waves, { ElementSelector } from 'node-waves';
import invert from 'invert-color';
const color = require('color');
const classNames = require('classnames');

export interface IButtonProps {
     rounded?: boolean;
     shadow?: boolean;
     circle?: boolean;
     ripple?: boolean;
}

const ButtonLayout = styled.button<IButtonProps>`
     outline: none;
     padding: 0.85em 1.8em 0.85em;
     display: inline-block;
     outline: none;
     cursor: pointer;
     text-align: center;
     font-weight: normal;
     border: none;
     background: ${(props) => props.theme.color.secondary};
     color: ${(props) => invert(props.theme.color.primary)};
     transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
     &:not(:disabled) {
          ${(props) =>
               props.shadow &&
               `box-shadow: 0 8px 15px -9px ${color(
                    props.theme.color.secondary
               ).lighten(0.5)};`}
     }

     &:not(:disabled):hover {
          ${(props) =>
               props.shadow &&
               `box-shadow: 0 8px 21px -7px ${color(
                    props.theme.color.secondary
               ).lighten(0.1)};`}
     }
     & > i {
          color: ${(props) => invert(props.theme.color.primary)};
     }
     &:disabled {
          cursor: default;
          background: #f7f7f7;
          color: #cecece;
          opacity: 0.8;
     }
`;

export const Index: React.FC<
     IButtonProps & HTMLAttributes<HTMLButtonElement>
> = (props) => {
     const btnRef = useRef<HTMLButtonElement>(null);
     useEffect(() => {
          if (props.ripple) {
               Waves.attach(btnRef.current as ElementSelector, ['waves-light']);
               Waves.init();
          }
     }, []);

     return (
          <ButtonLayout
               ref={btnRef}
               {...props}
               className={classNames({
                    'btn-rounded': props.rounded,
                    'btn-circle': props.circle
               })}
          >
               {props.children}
          </ButtonLayout>
     );
};

export default Index;
