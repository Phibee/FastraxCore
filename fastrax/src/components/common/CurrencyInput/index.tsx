import React, {
     HTMLAttributes,
     useRef,
     useLayoutEffect,
     useState
} from 'react';
import styled from 'styled-components';
import Inputmask from 'inputmask';

export interface ICurrencyInputProps {
     digits?: number;
     rate?: number;
     currencyCode?: string | 'USD';
     value: number | string;
     converted?: boolean;
     afterConvertedOrFormatted?: (e: any) => void;
}

const InputWrapperStyled = styled.div`
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     border: 1px solid #dedede;
     border-radius: 5px;
`;

const CurrencyCodeStyled = styled.div`
     background: green;
     flex-shrink: 0;
     padding: 5px 10px;
     color: #fff;
     border-top-left-radius: 5px;
     border-bottom-left-radius: 5px;
     user-select: none;
`;

const InputWrapStyled = styled.div`
     flex-grow: 1;
     padding: 0px 10px;
`;

const InputStyled = styled.input`
     outline: 0;
     border: 0;
     text-align: right;
     width: 100%;
     display: block;
     padding: 0;
     height: 100%;
`;

export const Index: React.FC<
     ICurrencyInputProps &
          HTMLAttributes<HTMLInputElement> &
          React.InputHTMLAttributes<HTMLInputElement>
> = ({ converted = true, ...props }) => {
     const getParseVal = (value: string | number) =>
          parseFloat(value.toString().replace(/[, ]+/g, ''));

     const inputRef = useRef<HTMLInputElement>(null);
     const [inputVal, setInputVal] = useState(props.value.toString());
     const [inputParseVal, setInputParseVal] = useState<number>(
          props.value ? getParseVal(props.value) : 0
     );

     const currencyRate =
          props.currencyCode == 'USD' ? props.rate : 100 / (props.rate || 100);

     useLayoutEffect(() => {
          var im = new Inputmask('currency', {
               prefix: '',
               digits: props.digits?.toString()
          });
          inputRef.current && im.mask(inputRef.current);
          let convertedVal = 0;
          if (converted) {
               convertedVal =
                    parseFloat(currencyRate?.toString() || '0') *
                    getParseVal(props.value);
               setInputVal(convertedVal.toString());
               setInputParseVal(convertedVal);
          }

          props.afterConvertedOrFormatted &&
               props.afterConvertedOrFormatted(convertedVal || props.value);
     }, []);

     const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
          const { value } = e.currentTarget;
          setInputVal(value);
          setInputParseVal(parseFloat(value.toString().replace(/[, ]+/g, '')));
     };

     return (
          <InputWrapperStyled>
               <CurrencyCodeStyled>{props.currencyCode}</CurrencyCodeStyled>{' '}
               <InputWrapStyled>
                    <InputStyled
                         ref={inputRef}
                         {...props}
                         value={inputVal}
                         onChange={handleInputChange}
                    ></InputStyled>
               </InputWrapStyled>
          </InputWrapperStyled>
     );
};

export default Index;
