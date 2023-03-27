import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './home';
import about from './about';
import web from './web';
import game from './game';
import dtm from './dtm';
import graphic from './graphic';
import other from './other';
import Header from './header';
import Footer from './footer';



function App () {
    return(
      <BrowserRouter>
        <Header> </Header>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/web" component={web} />
          <Route exact path="/game" component={game} />
          <Route exact path="/dtm" component={dtm} />
          <Route exact path="/graphic" component={graphic} />
          <Route exact path="/other" component={other} />
          <canvas id="canvas" />
        </Switch>
        <Footer> </Footer>
      </BrowserRouter>
    );
  };
export default App;