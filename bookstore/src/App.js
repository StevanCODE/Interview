import "./App.css"
import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import BookPage from "./pages/BookPage/BookPage";

function App() {
  


  return (
    <Router>
      <Switch>
        <Route exact path = "/" exact component = {HomePage} />
        <Route exact path = "/book/:bookId" exact component = {BookPage} />
      </Switch>
    </Router>
  );
}

export default App;
