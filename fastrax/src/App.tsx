import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/variables.scss';

import Layout from './components/layout';
import { BannerHeader } from './components/common';

const ContentSidebar: React.FC = () => (
     <div>
          <label htmlFor="">Content SideBar Here...</label>
     </div>
);

const ContentBanner: React.FC = () => (
     <BannerHeader
          title="Dashboard"
          subTitle="Shows graphical representation of records"
     />
);

function App() {
     return (
          <Layout contentSideBar={ContentSidebar} contentBanner={ContentBanner}>
               <div>Content Here...</div>
          </Layout>
     );
}

export default App;
