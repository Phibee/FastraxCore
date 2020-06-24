import React from 'react';
import Layout from '../components/layout';

import {
     Content,
     Banner,
     BannerHeader,
     ContentSidebar,
     Button,
} from '../components/common';

export interface DashboardRouteProps {}

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
                    <Button border shadow>
                         Test
                    </Button>
               </Content>
               <ContentSidebar></ContentSidebar>
          </Layout>
     );
};

export default DashboardRoute;
