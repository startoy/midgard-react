import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GiveOnSpotApp from './components/giveonspotapp/GiveOnSpotApp.react';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<GiveOnSpotApp />, document.getElementById('root'));
registerServiceWorker();
