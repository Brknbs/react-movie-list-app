import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import MovieDetailsPage from './pages/MovieDetailsPage/movie-details-page';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage } />
          <Route exact path="/moviedetails/:id" component={MovieDetailsPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
