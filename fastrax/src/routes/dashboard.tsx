import React, { useState } from 'react';
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
     const [isVisible, setIsVisible] = useState(false);
     return (
          <Layout>
               <Banner>
                    <BannerHeader
                         title="Dashboard"
                         subTitle="Shows the dashboard"
                    />
               </Banner>
               <Content>
                    <button
                         onClick={() => {
                              setIsVisible(!isVisible);
                              Toast.showALert('wew');
                         }}
                    >
                         Show
                    </button>
                    <button onClick={() => setIsVisible(!isVisible)}>
                         Hide
                    </button>
               </Content>
               <ContentSidebar></ContentSidebar>
          </Layout>
     );
};

export default DashboardRoute;
