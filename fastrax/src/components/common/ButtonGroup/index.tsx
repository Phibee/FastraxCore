import React from 'react';
import styled from 'styled-components';
import { default as Button, IButtonProps } from '../Button';

interface IButtonGroupProps {}

const ButtonGroupStyled = styled.div<IButtonGroupProps>``;

export const Index: React.FC<
     IButtonGroupProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
     React.Children.forEach(props.children, (child: any) => {
          if (child?.type != Button) {
               throw new Error('<ButtonGroup /> accepts only <Button />');
          }
     });

     return <ButtonGroupStyled {...props}>{props.children}</ButtonGroupStyled>;
};

export default Index;
