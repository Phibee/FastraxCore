import Base from './base';
const merge = require('deepmerge');

export default merge(Base, {
     color: {
          primary: '#d0d0d0',
     },
     bgColor: {
          primary: '#ffffff',
          secondary: '#4e4e4e',
     },
     background: '#333',
});
