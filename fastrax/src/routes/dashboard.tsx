import React, { useState, ChangeEvent } from 'react';
import Layout from '../components/layout';

import {
     Content,
     Banner,
     BannerHeader,
     ContentSidebar,
     Button,
     Alert,
     RadialMenu,
     Input
} from '../components/common';

export interface DashboardRouteProps {}

const { Toast } = Alert;

const DashboardRoute: React.FC<DashboardRouteProps> = () => {
     return (
          <Layout>
               <Banner>
                    <BannerHeader
                         title="Dashboard"
                         subTitle="Shows the dashboard"
                    />
               </Banner>
               <Content>
                    <Input
                         shadow
                         rounded
                         placeholder="Asset ID"
                         value="test"
                         icon
                         iconName="ams-notification"
                         type="password"
                    />
                    <Toast
                         isVisible={true}
                         title="System Message"
                         message="Successfully saved"
                         type="success"
                         position="top-left"
                    />
               </Content>
               <ContentSidebar></ContentSidebar>
          </Layout>
     );
};

export default DashboardRoute;
