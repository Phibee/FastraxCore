import Base from './base';
const merge = require('deepmerge');

export default merge(Base, {
     color: {
          primary: '#000000',
          secondary: '#384E6E',
     },
     bgColor: {
          primary: '#4e4e4e',
          secondary: '#fff',
     },
     background: '#fff',
});
