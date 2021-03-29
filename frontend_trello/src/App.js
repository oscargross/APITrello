import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Navbar'
import List from './pages/List'
import FormCard from './components/FormCard'
import FormCheckList from './components/FormCheckList';
import FormCheckItem from './components/FormCheckItem';


function App() {

  return (
    <>
      <HashRouter>
      <Main />
        <Switch>
          <Route path="/" exact={true} component={FormCard} />
          <Route path="/checkList"  component={FormCheckList} />
          <Route path="/checkItem"  component={FormCheckItem} />
          <Route path="/list"  component={List} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
