import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
