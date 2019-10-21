import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Main from './Main'
import Login from './Login'
import ContactUs from './ContactUs'
import ProductsPage from './ProductsPage'
import TermsOfUsePage from './TermsOfUsePage'
import PrivacyPolicyPage from './PrivacyPolicyPage'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/terms_of_use" component={TermsOfUsePage} />
      <Route path="/privacy_policy" component={PrivacyPolicyPage} />
    </Router>
  )
}

export default App