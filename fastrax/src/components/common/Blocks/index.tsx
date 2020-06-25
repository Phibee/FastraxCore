import React, { HtmlHTMLAttributes, HTMLAttributes } from 'react';
import styled from 'styled-components';

const classNames = require('classnames');

interface IProps {
     grow?: boolean;
     column?: boolean;
     flex?: boolean;
     wrapFlex?: boolean;
     middle?: boolean;
     center?: boolean;
     right?: boolean;
     left?: boolean;
     top?: boolean;
     bottom?: boolean;
     padding?: boolean;
}

const BlockStyled = styled.div``;

export const Index: React.FC<IProps & React.HTMLAttributes<HTMLDivElement>> = (
     props,
) => {
     return (
          <BlockStyled
               {...props}
               className={classNames({
                    flex: props.flex,
                    'inline-flex': !props.flex,
                    'flex-col': props.column,
                    'flex-grow': props.grow,
                    'flex-wrap': props.wrapFlex,
                    'flex-unwrap': props.flex && !props.wrapFlex,
                    'flex-center': props.center,
                    'flex-middle': props.middle,
                    'flex-right': props.right,
                    'flex-left': props.left,
                    'flex-top': props.top,
                    'flex-bottom': props.bottom,
                    'flex-padding': props.padding,
               })}
          >
               {props.children}
          </BlockStyled>
     );
};

export default Index;
