import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import Routes from './routes'; // import the main routes component

ReactDOM.render(<Routes />, document.querySelector('.root')); // render our App component and mount it to our #root element
