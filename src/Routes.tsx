import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

export default function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
