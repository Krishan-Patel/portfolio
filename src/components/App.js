import React from "react";
import "../styles/App.css";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ToDo from './ToDo'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTab from './NewTab'
import ScrollToTop from "./ScrollToTop";
import StockNow from "./StockNow"
export default function App() {
  return (
    <div className="Mainpage">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/New-Tab/" component={NewTab} />
          <Route path="/Todo-list/" component={ToDo} />
          <Route path="/StockNow/" component={StockNow} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
