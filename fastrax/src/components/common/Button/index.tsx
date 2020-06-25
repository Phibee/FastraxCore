import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Waves, { ElementSelector } from 'node-waves';
import invert from 'invert-color';

const classNames = require('classnames');

export interface IButtonProps {
     border?: Boolean;
     shadow?: Boolean;
}

const ButtonLayout = styled.button<IButtonProps>`
     outline: none;
     border: none;
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
`;

export const Index: React.FC<
     IButtonProps & HTMLAttributes<HTMLButtonElement>
> = (props) => {
     const btnRef = useRef<HTMLButtonElement>(null);
     useEffect(() => {
          Waves.attach(btnRef.current as ElementSelector, [
               'waves-float',
               'waves-light',
          ]);
          Waves.init();
     }, []);

     return (
          <ButtonLayout
               ref={btnRef}
               {...props}
               className={classNames({
                    'btn-rounded': props.border,
                    'btn-shadow': props.shadow,
               })}
          >
               {props.children}
          </ButtonLayout>
     );
};

export default Index;
