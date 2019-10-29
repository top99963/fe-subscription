import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './page/Landing'
import Product from './page/Product'
import Terms from './page/Terms'
import PrivacyPolicy from './page/PrivacyPolicy'
import Login from './page/Login'
import Contact from './page/Contact'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/contact_us" component={Contact} />
      <Route path="/products" component={Product} />
      <Route path="/terms_of_use" component={Terms} />
      <Route path="/privacy_policy" component={PrivacyPolicy} />
    </Router>
  )
}

export default App