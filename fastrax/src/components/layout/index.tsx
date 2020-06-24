import React, { cloneElement } from 'react';
import '../../App.css';
import '../../sass/variables.scss';
import { ImageResources } from '../../assets';
import {
     Block,
     Wrapper,
     Aside,
     Sidebar,
     SidebarExtension,
     Brand,
     NavBar,
     Footer,
     Content,
     Banner,
     ContentSidebar,
} from '../common';
import { Link } from 'react-router-dom';

interface IProps {
     //  contentBanner?: any;
     //  contentSideBar?: any;
}

export const Layout: React.FC<IProps> = (props) => {
     const findAndLoadElement = (
          element: React.ReactNode,
          elementProps?: Object,
     ) => {
          const childElement = React.Children.toArray(props.children).find(
               (child: any) => child?.type === element,
          );

          if (React.isValidElement(childElement) && elementProps) {
               return cloneElement(childElement, elementProps);
          }

          return childElement;
     };

     React.Children.forEach(props.children, (child: any) => {
          if (
               child?.type != Banner &&
               child?.type != ContentSidebar &&
               child?.type != Content
          ) {
               throw new Error(
                    '<Layout /> accepts only child element like <Banner /> | <Content /> | <ContentSidebar />',
               );
          }
     });

     return (
          <Wrapper>
               <Block flex wrap className="wewew">
                    <Aside>
                         <Brand logo={ImageResources.Fastrax} />
                         <Sidebar>
                              <ul>
                                   <li className="nav_title">Navigation</li>
                                   <li>
                                        <Link to="/">
                                             <i className="ams-dashboard"></i>
                                             <span>Dashboard</span>
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/about">
                                             <i className="ams-stocks"></i>
                                             <span>About</span>
                                        </Link>
                                   </li>
                              </ul>
                         </Sidebar>
                         <SidebarExtension>
                              <ul>
                                   <li>
                                        <a href="#">
                                             <i className="ams-toggle-list"></i>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="ams-cog"></i>
                                        </a>
                                   </li>
                              </ul>
                         </SidebarExtension>
                    </Aside>
                    <Block grow>
                         <Block flex column>
                              <NavBar>
                                   <Block flex grow>
                                        <Block grow></Block>
                                        <Block>
                                             <ul className="inline-list">
                                                  <li>
                                                       <a href="#">
                                                            <i className="ams-notification"></i>
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="ams-signout"></i>
                                                       </a>
                                                  </li>
                                             </ul>
                                        </Block>
                                   </Block>
                              </NavBar>
                              <Block flex grow>
                                   <Block flex column grow>
                                        {findAndLoadElement(Banner)}
                                        {findAndLoadElement(Content)}

                                        <Footer />
                                   </Block>
                                   {findAndLoadElement(ContentSidebar, {
                                        isBannerVisible: findAndLoadElement(
                                             Banner,
                                        ),
                                   })}
                              </Block>
                         </Block>
                    </Block>
               </Block>
          </Wrapper>
     );
};

export default Layout;
