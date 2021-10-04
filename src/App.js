import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Allserves from './components/AllServes/Allserves';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Serves from './components/Serves/Serves';
import Community from './components/Community/Community';
import LearnMore from './components/LearnMore/LearnMore';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Banner></Banner>
      <Allserves></Allserves>
      <Footer></Footer> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/serves">
            <Serves></Serves>
          </Route>
          <Route exact path="/community">
            <Community></Community>
          </Route>
          <Route exact path="/learn/:id">
            <LearnMore></LearnMore>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
