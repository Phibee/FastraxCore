import React, {
     HTMLAttributes,
     useEffect,
     useState,
     ChangeEvent,
     useRef
} from 'react';
import styled from 'styled-components';
import Waves, { ElementSelector } from 'node-waves';
import invert from 'invert-color';

const classNames = require('classnames');

export interface IInputProps {
     rounded?: boolean;
     shadow?: boolean;
     placeholder?: string;
     icon?: boolean;
     iconName?: string;
     iconColor?: string;
     type?: 'text' | 'password' | 'number' | 'email';
}

const IconStyled = styled.i<IInputProps>`
     position: absolute;
     left: 12px;
     top: 13px;
     font-weight: 100;
     font-size: 13px;
     color: ${(props) => (props.iconColor ? props.iconColor : '#cacaca')};
`;

const ShowPassIconStyled = styled.i<IInputProps>`
     position: absolute;
     cursor: pointer;
     right: 12px;
     top: 13px;
     font-weight: 100;
     font-size: 13px;
     &:hover {
          color: #8e8e8e;
     }
     color: ${(props) => (props.iconColor ? props.iconColor : '#cacaca')};
`;

const LabelStyled = styled.label`
     position: absolute;
     left: 12px;
     top: -7px;
     background: #fff;
     padding: 0 4px;
     font-size: 8pt;
     font-family: 'Poppins';
     font-weight: 300;
`;

const InputStyled = styled.input<IInputProps>`
     border: 1px solid rgba(0, 0, 0, 0.08);
     outline: none;
     padding: 7px 16px 7px ${(props) => (props.icon ? '33' : '16')}px !important;
     line-height: 1.5;
     font-size: 10pt;
     width: 100%;
     font-weight: 300;

     &:focus {
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 10px 17px -14px #999ea08a !important;
     }
`;

const InputWrapperStyled = styled.div`
     position: relative;
     display: flex;
     margin-top: 9px;
`;

export const Index: React.FC<
     IInputProps &
          HTMLAttributes<HTMLInputElement> &
          React.InputHTMLAttributes<HTMLInputElement>
> = ({ placeholder, type, ...props }) => {
     const [inputVal, setInputVal] = useState('');
     const inputRef = useRef<HTMLInputElement>(null);
     const iconRef = useRef<HTMLElement>(null);
     const handleShowPassword = () => {
          const _type = inputRef.current?.getAttribute('type');
          const isPass = _type === 'password';
          inputRef.current?.setAttribute('type', isPass ? 'text' : 'password');
          iconRef.current?.classList.add('pulse');
     };
     const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
          const { value } = e.currentTarget;
          setInputVal(value);
     };

     useEffect(() => {
          const animated = document.querySelector('.animated__icon');
          animated?.addEventListener('animationend', () => {
               iconRef.current?.classList.remove('pulsate');
          });
     });

     return (
          <InputWrapperStyled>
               <LabelStyled>{placeholder}</LabelStyled>
               {props.icon && (
                    <IconStyled className={props.iconName} {...props} />
               )}
               <InputStyled
                    {...props}
                    ref={inputRef}
                    type={type || 'text'}
                    className={classNames({
                         'btn-rounded': props.rounded,
                         'btn-shadow': props.shadow
                    })}
                    onChange={props.onChange || handleOnChange}
                    value={inputVal === '' ? props.value : inputVal}
               />
               {type === 'password' && (
                    <ShowPassIconStyled
                         ref={iconRef}
                         className="animated__icon ams-notification"
                         onClick={handleShowPassword}
                    />
               )}
          </InputWrapperStyled>
     );
};

export default Index;
