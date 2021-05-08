import React from "react";
import "../styles/App.css";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TaskManager from './TaskManager'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameCenter from './GameCenter'
import ScrollToTop from "./ScrollToTop";
import StockNow from "./StockNow"

export default function App() {
  return (
    <div className="Mainpage">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/portfolio/" exact component={Body} />
          <Route path="/GameCenter/" component={GameCenter} />
          <Route path="/Task-Manager/" component={TaskManager} />
          <Route path="/StockNow/" component={StockNow} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
