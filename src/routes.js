import React from 'react';
import { Route} from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import MainPage from './components/main/Main';
import FullTable from './components/fullist/Table';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/main" component={MainPage} />
    <Route path="/all" component={FullTable} />
  </Route>
);