import React, { HTMLAttributes, useEffect, useState, useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import invert from 'invert-color';
import { motion, AnimationProps, MotionProps } from 'framer-motion';
import ReactDOM from 'react-dom';
const color = require('color');
const classNames = require('classnames');

export interface IToastAlertProps {
     title?: string;
     type?: 'info' | 'success' | 'warning' | 'danger';
     message: string;
     isVisible?: boolean;
     position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
     onClose?: () => void;
}

const ToastStyled = motion.custom(styled.div<IToastAlertProps>`
     position: fixed;
     z-index: 1000;
     display: ${(props) => (props.isVisible ? 'flex' : 'none')};
     align-items: center;
     min-width: 250px;
     border-radius: 4px;
     padding: 15px 20px;
     box-shadow: 0 13px 13px -8px rgba(162, 162, 162, 0.09),
          0 3px 18px 0px rgba(0, 0, 0, 0.1);
     background: ${(props) => invert(props.theme.color.primary)};
     border-left: ${(props) =>
          props.type && '5px solid' + props.theme.color[props.type]};

     span.toast-close {
          font-size: 8pt;
          color: #c5c5c5;
          position: absolute;
          right: 15px;
          top: 15px;
          cursor: pointer;
     }

     &.top-left {
          top: 20px !important;
          left: 20px !important;
     }

     &.bottom-left {
          bottom: 20px !important;
          left: 20px !important;
     }

     &.top-right {
          top: 20px !important;
          right: 20px !important;
     }

     &.bottom-right {
          bottom: 20px !important;
          right: 20px !important;
     }
`);

const ToastTitleStyled = styled.div`
     font-size: 12pt;
     font-weight: 500;
     margin-bottom: 5px;
`;

const ToastMessageStyled = styled.div`
     font-size: 9pt;
     font-weight: 300;
     color: #3e3e3e;
     padding-right: 23px;
     width: 200px;
     word-break: break-word;
`;

const ToastIconStyled = styled.i<IToastAlertProps>`
     margin-right: 20px;
     font-size: 15px;
     position: relative;
     color: white;
     &:after {
          position: absolute;
          content: '';
          height: 30px;
          width: 30px;
          background: ${(props) =>
               props.type && color(props.theme.color[props.type]).lighten(0.1)};
          box-shadow: ${(props) =>
               props.type &&
               '0px 5px 10px -5px ' + props.theme.color[props.type]};
          border-radius: 30px;
          top: -7px;
          left: -8px;
          z-index: -1;
     }
`;

interface ComponentWithStaticMethod<IToastAlertProps>
     extends React.FC<IToastAlertProps> {
     showAlert: (value: string) => void;
}

class Index extends React.Component<
     IToastAlertProps & HTMLAttributes<HTMLDivElement> & MotionProps
> {
     private toastRef = React.createRef<HTMLDivElement>();

     constructor(props: IToastAlertProps) {
          super(props);
     }

     static defaultProps: IToastAlertProps = {
          isVisible: false,
          message: ''
     };

     handleClose = () => {
          this.toastRef.current?.remove();
          this.props.onClose && this.props.onClose();
     };
     variants = {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
     };

     static showALert = (message: string) => {};

     render() {
          return (
               <ToastStyled
                    ref={this.toastRef}
                    initial="hidden"
                    animate="visible"
                    variants={this.variants}
                    transition={{ delay: 0.5 }}
                    {...this.props}
                    className={classNames({
                         'top-left': this.props.position == 'top-left',
                         'top-right':
                              this.props.position == 'top-right' ||
                              !this.props.position,
                         'bottom-left': this.props.position == 'bottom-left',
                         'bottom-right': this.props.position == 'bottom-right'
                    })}
               >
                    {this.props.type && (
                         <ToastIconStyled
                              {...this.props}
                              className="ams-check"
                         ></ToastIconStyled>
                    )}
                    <span
                         className="toast-close ams-cross"
                         onClick={this.handleClose}
                    ></span>
                    <div className="toast__body__wrapper">
                         {this.props.title && (
                              <ToastTitleStyled>
                                   {this.props.title}
                              </ToastTitleStyled>
                         )}
                         <ToastMessageStyled>
                              {this.props.message}
                         </ToastMessageStyled>
                    </div>
               </ToastStyled>
          );
     }
}

// export const Index: ComponentWithStaticMethod<
//      IToastAlertProps & HTMLAttributes<HTMLDivElement> & MotionProps
// > = (props) => {
//      const toastRef = useRef<HTMLDivElement>(null);
//      const handleClose = () => {
//           toastRef.current?.remove();
//           props.onClose && props.onClose();
//      };

//      const variants = {
//           hidden: { opacity: 0, y: -50 },
//           visible: { opacity: 1, y: 0 },
//      };

//      return (
//           <ToastStyled
//                ref={toastRef}
//                initial="hidden"
//                animate="visible"
//                variants={variants}
//                transition={{ delay: 0.5 }}
//                {...props}
//                className={classNames({
//                     'top-left': props.position == 'top-left',
//                     'top-right':
//                          props.position == 'top-right' || !props.position,
//                     'bottom-left': props.position == 'bottom-left',
//                     'bottom-right': props.position == 'bottom-right',
//                })}
//           >
//                {props.type && (
//                     <ToastIconStyled
//                          {...props}
//                          className="ams-check"
//                     ></ToastIconStyled>
//                )}
//                <span
//                     className="toast-close ams-cross"
//                     onClick={handleClose}
//                ></span>
//                <div className="toast__body__wrapper">
//                     {props.title && (
//                          <ToastTitleStyled>{props.title}</ToastTitleStyled>
//                     )}
//                     <ToastMessageStyled>{props.message}</ToastMessageStyled>
//                </div>
//           </ToastStyled>
//      );
// };

// Index.showAlert = (value: string): void => {
//      ReactDOM.render()
//      // ReactDOM.render(
//      //      <Index
//      //           position="top-left"
//      //           isVisible={true}
//      //           title="System Message"
//      //           message="You have successfully saved."
//      //           type="danger"
//      //      />,
//      //      document.querySelector('body'),
//      // );
// };

export default Index;
