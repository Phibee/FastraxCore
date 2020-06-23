import React from 'react';
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

interface IProps {
     contentBanner?: any;
     contentSideBar?: any;
}

export const Layout: React.FC<IProps> = (props) => {
     return (
          <Wrapper>
               <Block flex wrap>
                    <Aside>
                         <Brand logo={ImageResources.Fastrax} />
                         <Sidebar>
                              <ul>
                                   <li className="nav_title">Navigation</li>
                                   <li>
                                        <a className="active" href="#">
                                             <i className="ams-dashboard"></i>
                                             <span>Dashboard</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="ams-truck"></i>
                                             <span>Asset Management</span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="ams-stocks"></i>
                                             <span>Stock Inventory</span>
                                        </a>
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
                                        <Block grow>
                                             <label>dfdf</label>
                                        </Block>
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
                                        {props.contentBanner && (
                                             <Banner>
                                                  {props.contentBanner()}
                                             </Banner>
                                        )}
                                        <Content>{props.children}</Content>
                                        <Footer />
                                   </Block>
                                   {props.contentSideBar && (
                                        <ContentSidebar
                                             isBannerVisible={
                                                  !!props.contentBanner
                                             }
                                        >
                                             {props.contentSideBar()}
                                        </ContentSidebar>
                                   )}
                              </Block>
                         </Block>
                    </Block>
               </Block>
          </Wrapper>
     );
};

export default Layout;
