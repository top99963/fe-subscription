import React from 'react'
import './FooterCopyRight.css'

function FooterCopyRight() {
    return (
        <div className="footer-copyright">
            <div className="container">
                <ul>
                    <li>
                        © 2019 Renewables Accel . All Rights Reserved.
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
                </ul>
            </div>
        </div>
    )
}

export default FooterCopyRight