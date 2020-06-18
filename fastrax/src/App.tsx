import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Block, Wrapper, Aside } from './Components';

function App() {
     return (
          <Wrapper>
               <Block flex wrap padding>
                    <Aside></Aside>
                    <Block grow>
                         <label>testss</label>
                    </Block>
               </Block>
          </Wrapper>
     );
}

export default App;
