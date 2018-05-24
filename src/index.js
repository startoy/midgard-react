import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeApp from './components/HomeApp.react';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<HomeApp />, document.getElementById('root'));
registerServiceWorker();
