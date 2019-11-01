import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './page/Landing'
import Product from './page/Product'
import Terms from './page/Terms'
import PrivacyPolicy from './page/PrivacyPolicy'
import Login from './page/Login'
import Contact from './page/Contact'
import ListContact from "./page/ListContact";
import ListSubscribe from "./page/ListSubscribe";
import Resting from "./page/Resting";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/contact_us" component={Contact} />
      <Route path="/products" component={Product} />
      <Route path="/terms_of_use" component={Terms} />
      <Route path="/privacy_policy" component={PrivacyPolicy} />
      <Route path='/resting' component={Resting}/>
      <Route path="/list_contact" component={ListContact} />
      <Route path="/list_subscribe" component={ListSubscribe} />
    </Router>
  )
}

export default App