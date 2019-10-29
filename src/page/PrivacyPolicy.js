import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import './PrivacyPolicy.css'
const initState = {}

class PrivacyPolicyPage extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="page-privacy">
                    <div className="hero-image">
                        <h1>Welcome to <br className="d-md-none" />our Privacy Policy</h1>
                        <span>Your privacy is critically important to us.</span>
                    </div>
                    <div className="privacy-wrap">
                        <div className="container">
                            <div className="title-privacy">
                                <p>It is PTT Public Company Limited (“PTT”)’s policy to respect your privacy regarding any information we may collect while operating our website.
                                  This Privacy Policy applies to http://www.reacc.io/ (hereinafter, "us", "we", or "http://www.reacc.io/").
                                  We respect your privacy and are committed to protecting personally identifiable information you may provide us through the website.
                                  We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our website,
                                  how we use this information, and under what circumstances we may disclose the information to third parties.
                                  This Privacy Policy applies only to information we collect through the website and does not apply to our collection of information from other sources.
                                </p>
                                <p>
                                    This Privacy Policy, together with the Terms and conditions posted on our website,
                                    set forth the general rules and policies governing your use of our website.
                                    Depending on your activities when visiting our website, you may be required to agree to additional terms and conditions.
                                </p>
                            </div>
                            <div className="privacy-detail">
                                <h2>Personally Identifiable Information Collection:</h2>
                                <p>
                                    We may ask you for, or you may voluntarily submit, personally identifiable information when you are using our website for the purpose of providing our products and services related to renewable energy procurement solutions and to communicate with you on our developments. The personally identifiable information which you may provide to us could include, but is not limited to:
                                </p>
                                <ul>
                                    <li>Your name</li>
                                    <li>Your contact information (including, without limitation, address and email address);</li>
                                    <li>Your IP address; and</li>
                                    <li>Other personal information.</li>
                                </ul>
                                <h2>Non-Personal Or Aggregate Information That We Collect:</h2>
                                <p>
                                    When you access our website, we may automatically collect non-personally identifiable information from you, such as IP host address, web pages viewed, browser type, operating system, referring service, search information, device type, page views, usage and browsing habits on the Service and similar data. We may also aggregate demographic information collected from our users (such as the number of users in a particular geographical location) in a manner which does not identify any one individual. We may also aggregate information collected offline in connection with the Service, obtain non-personally identifiable information from third party sources and develop aggregate information by anonymizing previously collected personally identifiable information.
    
                                </p>
                                <p>
                                    It is possible at times when collecting non-personally identifiable information through automatic means that we may unintentionally collect or receive personally identifiable information that is mixed in with the non-personally identifiable information. While we will make reasonable efforts to prevent such incidental data collection, the possibility still exists. If you believe that we have inadvertently collected your personal information, please notify us at info@reacc.io
                                </p>
                                <h2>Who will be able to access your information</h2>
                                <p>
                                    The personal information covered by this Privacy Policy is exclusively processed for the purposes referred to above and will only be shared on a strict need to know basis with:
                                </p>
                                <ul>
                                    <li>Other companies within the PTT group of companies;</li>
                                    <li>Authorized third party agents, service providers and/or subcontractors of PTT;</li>
                                    <li>A competent public authority, government, regulatory or fiscal agency where it is necessary to comply with a legal or regulatory obligation to which the relevant Shell company/companies is subject to or as permitted by applicable local law.</li>
                                </ul>
                                <h2>Links To External Sites</h2>
                                <p>
                                    Our website may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
                                </p>
                                <h2>Cookies</h2>
                                <p>
                                    A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. The type of cookies that we will collect are used for the purpose of analyze our site traffic and to enable certain site functionality.
                                </p>
                                <ul>
                                    <li>Strictly Necessary Cookies: These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</li>
                                    <li>Performance Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</li>
                                </ul>
                                <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to PTT ExpresSo's use of cookies.</p>
                                <h2>Privacy Policy Changes</h2>
                                <p>
                                    Although most changes are likely to be minor, PTT may change its Privacy Policy from time to time, and in PTT’s sole discretion. PTT encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
                                </p>
                                <h2>Contact us at </h2>
                                <p>If you have any issues, queries or complaints regarding the processing of your personal data please contact us at  PTT Public Company Limited 555 Vibhavadi Rangsit Rd., Chatuchak, Bangkok 10900 Thailand Tel: 02 537 2000</p>
                                <h2>Effective Date:</h2>
                                <p>This Privacy Policy was last updated on October 21, 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default PrivacyPolicyPage