import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/variables.scss';

import ImageResources from './assets/index';
import Layout from './components/layout';

const ContentSidebar: React.FC = () => (
     <div>
          <label htmlFor="">Content SideBar Here...</label>
     </div>
);

function App() {
     return (
          <Layout>
               <div>Content Here...</div>
          </Layout>
     );
}

export default App;
