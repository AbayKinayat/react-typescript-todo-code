import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main">
          <Switch>
            <Route path="/" component={TodoPage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
