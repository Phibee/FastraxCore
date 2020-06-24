import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/variables.scss';
import './assets/style.css';
import Routes from './routes';

function App() {
     const test = [
          { title: 'Menu 1', icon: '&#xe903;', active: true },
          { title: 'Menu 2', icon: '&#xe908;', active: false },
          { title: 'Menu 3', icon: '&#xe90d;', active: false },
     ];

     return <Routes />;
}

export default App;
