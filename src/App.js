import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Main from './Main'
import Login from './Login'
import ContactUs from './ContactUs'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/contactUs" component={ContactUs} />
    </Router>
  )
}

export default App