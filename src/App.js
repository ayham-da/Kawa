import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import Loading from "./Pages/Loading/Loading";
import MainHeader from './components/Nav/MainHeader1'

import AboutMe from "./Pages/AboutMe/AboutMe";
//import Contact from "./Pages/Contact";
import MyProjekt from "./Pages/MyProjekt/MyProjekt";

function App() {

  return (
    
    <Router>
    <MainHeader/>
    <Switch>
       <Route exact path="/" component={Loading} />
       <Route path="/Kawa" component={Home} />
       <Route path="/AboutMe" component={AboutMe} />
       <Route path="/MyProjekt" component={MyProjekt} />
       {/* <Route path="/contact" component={Contact} />
       <Route path="/project" component={Project} /> */}
       <Route path="*" component={Home} />
     </Switch>
   </Router>
  );
}

export default App;
