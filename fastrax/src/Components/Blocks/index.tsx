import React, { HtmlHTMLAttributes, HTMLAttributes } from 'react';
import styled from 'styled-components';

const classNames = require('classnames');

interface IProps {
     grow?: Boolean;
     column?: Boolean;
     flex?: Boolean;
     wrap?: Boolean;
     middle?: Boolean;
     center?: Boolean;
     right?: Boolean;
     left?: Boolean;
     top?: Boolean;
     bottom?: Boolean;
     padding?: Boolean;
}

export const Index: React.FC<IProps> = (props) => {
     return (
          <div
               className={classNames({
                    flex: props.flex,
                    'inline-flex': !props.flex,
                    'flex-col': props.column,
                    'flex-grow': props.grow,
                    'flex-wrap': props.wrap,
                    'flex-unwrap': props.flex && !props.wrap,
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
          </div>
     );
};

export default Index;
