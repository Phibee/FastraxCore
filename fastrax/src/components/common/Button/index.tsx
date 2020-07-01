import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Waves, { ElementSelector } from 'node-waves';
import invert from 'invert-color';
import { ProtectHOC } from '../../../hoc';
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
     ${(props) =>
          props.shadow &&
          `box-shadow: 0 8px 15px -8px ${color(
               props.theme.color.secondary
          ).lighten(0.5)};`}
     &:hover {
          ${(props) =>
               props.shadow &&
               `box-shadow: 0 8px 21px -5px ${color(
                    props.theme.color.secondary
               ).lighten(0.7)};`}
     }
     & > i {
          color: ${(props) => invert(props.theme.color.primary)};
     }
`;

export const Index: React.FC<
     IButtonProps & HTMLAttributes<HTMLButtonElement>
> = (props) => {
     const btnRef = useRef<HTMLButtonElement>(null);
     useEffect(() => {
          if (props.ripple) {
               Waves.attach(btnRef.current as ElementSelector, [
                    'waves-float',
                    'waves-light'
               ]);
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

export default ProtectHOC({}, Index);
