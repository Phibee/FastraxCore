import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/variables.scss';
// import '@progress/kendo-theme-default/dist/all.css';
import './assets/style.css';
import 'node-waves/dist/waves.css';
// import { DatePicker } from '@progress/kendo-react-dateinputs';

import Routes from './routes';

function App() {
     //  const test = [
     //       { title: 'Menu 1', icon: '&#xe903;', active: true },
     //       { title: 'Menu 2', icon: '&#xe908;', active: false },
     //       { title: 'Menu 3', icon: '&#xe90d;', active: false },
     //  ];
     return <Routes />;
     //  return (
     //       <Layout>
     //            <Banner>
     //                 <BannerHeader
     //                      title="Dashboard"
     //                      subTitle="Shows graphical representation of records"
     //                 />
     //            </Banner>

     //            <Content>
     //                 <div> wew</div>
     //            </Content>

     //            <ContentSidebar>
     //                 <div>dwew</div>
     //            </ContentSidebar>
     //       </Layout>
     //  );
     //  return (
     //       <div>
     //            <DatePicker
     //                 defaultValue={new Date()}
     //                 format="dd/MMM/yyyy"
     //                 weekNumber={true}
     //            />
     //       </div>
     //  );
}

export default App;
