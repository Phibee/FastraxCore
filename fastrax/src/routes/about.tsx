import React from 'react';
import Layout from '../components/layout';
import { Content, Banner, BannerHeader } from '../components/common';

export interface AboutRouteProps {}

const AboutRoute: React.FC<AboutRouteProps> = () => {
     return (
          <Layout>
               <Banner>
                    <BannerHeader title="About" />
               </Banner>
               <Content></Content>
          </Layout>
     );
};

export default AboutRoute;
