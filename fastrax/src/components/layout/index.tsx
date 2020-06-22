import React from 'react';
import '../../App.css';
import '../../sass/variables.scss';
import ImageResources from '../../assets/index';
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
                         <Sidebar />
                         <SidebarExtension />
                    </Aside>
                    <Block grow>
                         <Block flex column>
                              <NavBar />
                              <Block flex grow>
                                   <Block flex column grow>
                                        <Banner />
                                        <Content>{props.children}</Content>
                                        <Footer />
                                   </Block>
                                   {props.contentSideBar && (
                                        <ContentSidebar>
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
