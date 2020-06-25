import React from 'react';
import Layout from '../components/layout';

import {
     Content,
     Banner,
     BannerHeader,
     ContentSidebar,
     Button,
     Alert,
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
                    <Toast
                         position="top-left"
                         isVisible={true}
                         title="System Message"
                         message="You have successfully saved."
                         type="danger"
                    />
               </Content>
               <ContentSidebar></ContentSidebar>
          </Layout>
     );
};

export default DashboardRoute;
