/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'
import path from '../path'
import FooterCoppyRight from '../component/FooterCopyRight'
import './Login.css'

const initState = {
    username: '',
    password: '',
    errorMsg: ''
}


class Login extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit() {

        axios.post(path.Login, this.state)
            .then(res => {
                if (res.data) {
                    window.location.href = 'resting'
                }
            })
            .catch(err => {
                console.log(err)
                this.setState({ errorMsg: 'Username or password incorrect !' })
            })
    }

    render() {
        return (
            <div>
                <div className="page-login">
                    <div className="container">
                        <div className="paper">
                            <div className="paper2">
                                <div className="headshadow" />
                                <h2>
                                    <img alt='' src="assets/img/logox2.png" />
                                </h2>
                                <p>
                                    Please enter your username and password to access <br />the<strong> Renewables Accel</strong>
                                </p>
                                <div className="form form-login">
                                    <div className="form-group">
                                        <input name='username' value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    </div>
                                    <div className="btn">
                                        <a href="#" onClick={this.handleSubmit} style={{ cursor: "pointer" }} >Submit</a>
                                    </div>
                                    <p style={{ color: 'red' }}>{this.state.errorMsg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <FooterCoppyRight />
                    </footer>
                </div>
            </div>

        )
    }
}

export default Login

