import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeApp from './components/HomeApp.react';
import GiveOnSpotApp from './components/giveonspotapp/GiveOnSpotApp.react';
import SearchEmpApp from './components/giveonspotapp/SearchEmpApp.react';
import HistoryApp from './components/historyapp/HistoryApp.react';
import RedeemApp from './components/redeemapp/RedeemApp.react';

ReactDOM.render(
              <Router>
                <div>
                <Route name="home" exact path="/" component={HomeApp}/>
                <Route name="give" path="/give" component={GiveOnSpotApp}/>
                <Route path="/search" component={SearchEmpApp}/>
                <Route name="redeem" path="/redeem" component={RedeemApp}/>
                <Route name="history" path="/history" component={HistoryApp}/>
                </div>
              </Router>, document.getElementById('root'));
registerServiceWorker();
