require('../src/assets/styles/all.scss');

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import RoutesXi from './routes'; // import the main app component

ReactDOM.render(<RoutesXi />, document.getElementById('root')); // render our App component and mount it to our #root element
