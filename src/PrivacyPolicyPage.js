import React from 'react'

const initState = {}

class PrivacyPolicyPage extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-2">
                                <a href="/" className="logo-main">
                                    <img src="assets/img/logo.png" />
                                </a>
                            </div>
                            <div className="col-md-7 nav-cover">
                                <ul className="nav-top">
                                    <li>
                                        <a href="/#about">
                                            About us
              </a>
                                    </li>
                                    <li>
                                        <a href="products">
                                            Product &amp; Service
              </a>
                                    </li>
                                    <li>
                                        <a href="/#news">
                                            News
              </a>
                                    </li>
                                    <li>
                                        <a href="/#partners">
                                            Partners
              </a>
                                    </li>
                                    <li>
                                        <a href="contactUs">
                                            Contact us
              </a>
                                    </li>
                                    <div className="nav-bottom">
                                        <ul>
                                            <li>
                                                <a href>
                                                    English
                  </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    ไทย
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3">
                                <a href="login" className="btn-login">Client login</a>
                                {/*  */}
                                <a className="navbar-toggler">
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="headshadow" />
                <div className="page-privacy">
                    <div className="hero-image">
                        <h1>Welcome to <br className="d-md-none" />our Privacy Policy</h1>
                        <span>Your privacy is critically important to us.</span>
                    </div>
                    <div className="privacy-wrap">
                        <div className="container">
                            <div className="title-privacy">
                                <p>It is PTT ExpresSo’s policy to respect your privacy regarding any information we may collect while operating our website.
                                  This Privacy Policy applies to https://blog.pttexpresso.com/ (hereinafter, "us", "we", or "https://blog.pttexpresso.com/").
                                  We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website.
                                  We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website,
                                  how we use this information, and under what circumstances we may disclose the information to third parties.
                                  This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
          </p>
                                <p>
                                    This Privacy Policy, together with the Terms and conditions posted on our Website,
                                    set forth the general rules and policies governing your use of our Website.
                                    Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
          </p>
                            </div>
                            <div className="privacy-detail">
                                <h2>Personally Identifiable Information Collection:</h2>
                                <p>We may ask you for, or you may voluntarily submit, personally identifiable information when you are using the Service.
                                  The personally identifiable information which you may provide to us could include, but is not limited to:
          </p>
                                <ul>
                                    <li>Your name</li>
                                    <li>Your contact information (including, without limitation, address and email address);</li>
                                    <li>Your IP address; and</li>
                                    <li>Other personal information.</li>
                                </ul>
                                <h2>Non-Personal Or Aggregate Information That We Collect:</h2>
                                <p>When you access our Service, we may automatically collect non-personally identifiable information from you, such as IP host address, web pages viewed, browser type, operating system, referring service,
                                  search information, device type, page views, usage and browsing habits on the Service and similar data. We may also aggregate demographic information collected from our users (such as the number of
                                  users in a particular geographical location) in a manner which does not identify any one individual. We may also aggregate information collected offline in connection with the Service, obtain non-personally
                                  identifiable information from third party sources and develop aggregate information by anonymizing previously collected personally identifiable information.
          </p>
                                <p>It is possible at times when collecting non-personally identifiable information through automatic means that we may unintentionally collect or receive personally identifiable information that is mixed in with
                                  the non-personally identifiable information. While we will make reasonable efforts to prevent such incidental data collection, the possibility still exists. If you believe that we have inadvertently collected your
                                  personal information, please notify us at pttexpresso@pttplc.com
          </p>
                                <h2>Security</h2>
                                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                                  acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>
                                <h2>Links To External Sites</h2>
                                <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and
                                  terms and conditions of every site you visit.We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
          </p>
                                <h2>Aggregated Statistics</h2>
                                <p>PTT ExpresSo may collect statistics about the behavior of visitors to its website. PTT ExpresSo may display this information publicly or provide it to others. However, PTT ExpresSo does not disclose your
                                  personally-identifying information.
          </p>
                                <h2>Cookies</h2>
                                <p>To enrich and perfect your online experience, PTT ExpresSo uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your
            preferences on your computer.</p>
                                <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. PTT ExpresSo uses cookies to help
                                  PTT ExpresSo identify and track visitors, their usage of https://blog.pttexpresso.com/, and their website access preferences. PTT ExpresSo visitors who do not wish to have cookies placed on their computers
            should set their browsers to refuse cookies before using PTT ExpresSo’s websites, with the drawback that certain features of PTT ExpresSo’s websites may not function properly without the aid of cookies.</p>
                                <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to PTT ExpresSo's use of cookies.</p>
                                <h2>Privacy Policy Changes</h2>
                                <p>Although most changes are likely to be minor, PTT ExpresSo may change its Privacy Policy from time to time, and in PTT ExpresSo’s sole discretion. PTT ExpresSo encourages visitors to frequently check this
            page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
                                <h2>Effective Date:</h2>
                                <p>This Privacy Policy was last updated on January 30, 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <ul className="nav-footer">
                                        <li>
                                            <a href="/">
                                                Home
                </a>
                                        </li>
                                        <li>
                                            <a href="/#about">
                                                About us
                </a>
                                        </li>
                                        <li>
                                            <a href="products">
                                                Product &amp; Service
                </a>
                                        </li>
                                        <li>
                                            <a href="/#news">
                                                News
                </a>
                                        </li>
                                        <li>
                                            <a href="/#partners">
                                                Partners
                </a>
                                        </li>
                                        <li>
                                            <a href="contactUs">
                                                Contact us
                </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div class="col-12 col-md-3 d-none d-none d-md-block">
                  <span>Follow us:</span>
                  <ul>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_01.png">
                          </a>
                      </li>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_02.png">
                          </a>
                      </li>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_03.png">
                          </a>
                      </li>
                  </ul>
              </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div class="d-md-none footer-follow">

      <div class="container">
      <span>Follow us:</span>
      <ul>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_01.png">
              </a>
          </li>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_02.png">
              </a>
          </li>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_03.png">
              </a>
          </li>
      </ul>
  </div>
  </div> */}
                    <div className="footer-copyright">
                        <div className="container">
                            <ul>
                                <li>
                                    © 2019 Expresso rep. All Rights Reserved.
          </li>
                                <li>
                                    <a href="terms_of_use">
                                        Terms and conditions
            </a>
                                </li>
                                <li>
                                    <a href="privacy_policy">
                                        Privacy Policy
            </a>
                                </li>
                                {/* <li>
                  <a href="">
                      Cookie Policy
                  </a>
              </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="btn-totop">
                        <a href>
                            <img className="d-none d-none d-md-block" src="assets/img/ico-top.png" />
                            <img className="d-md-none" src="assets/img/ico-top-m.png" />
                        </a>
                    </div>
                </footer>
            </div>

        )
    }
}

export default PrivacyPolicyPage