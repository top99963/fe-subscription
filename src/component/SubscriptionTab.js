import React from 'react'
import axios from 'axios'
import config from '../config'
import './SubscriptionTab.css'

const { baseUrl } = config
const initState = {
    type: 'buyer',
    name: '',
    email: '',
    company: '',
    contactNumber: '',
    isValidEmail: true,
    isOpenModal: false
}

class SubscriptionTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...initState, type: 'buyer' }
        this.handleTabBuyer = this.handleTabBuyer.bind(this)
        this.handleTabSeller = this.handleTabSeller.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
        this.handleOpenModal = props.handleOpenModal
    }


    handleTabSeller() {
        if (this.state.type !== 'seller') {
            this.setState({
                ...initState,
                type: 'seller'
            })
        }
    }

    handleTabBuyer() {
        if (this.state.type !== 'buyer') {
            this.setState({
                ...initState,
                type: 'buyer'
            })
        }
    }

    handleChange(event) {
        var { name, value } = event.target
        if (name === 'email') {
            this.setState({ isValidEmail: this.validateEmail(value) })
        }
        this.setState({ [name]: value })
    }


    handleDropDownChange(event) {
        this.setState({ renewableType: event.target.value })
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleSubmit(e) {
        if (this.state.email === '' || !this.state.isValidEmail) {
            this.setState({ isValidEmail: false })
            return
        }
        axios.post(baseUrl + '/subscripe', this.state)
            .then(res => {
                if (res.data) {
                    console.log('success')
                }
            })
            .catch(err => {
                console.log(err)
            })
        this.setState(prevState => ({
            ...initState,
            type: prevState.type,
            isOpenModal: true
        }))
    }

    renderHeader() {
        var headerText = this.state.type === 'buyer' ? 'Buying renewables' : 'Selling renewables'
        var bodyText = this.state.type === 'buyer' ? 'Learn how we can help you achieverenewable energy target, sign up for more information and demo' : 'Learn how your renewables assets can create additional value. Sign up for more information and demo.'

        return (
            <div>
                <h4>{headerText}</h4>
                <p>{bodyText}</p>
            </div>
        )
    }

    renderForm() {
        return (
            <div>
                <div className="form-group">
                    <input name='company' value={this.state.company} placeholder="Company" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='name' value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input style={!this.state.isValidEmail ? { borderBottomColor: 'red' } : {}} name='email' value={this.state.email} placeholder="Email*" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='contactNumber' value={this.state.contactNumber} placeholder="Contact number" onChange={this.handleChange} />
                </div>
            </div>
        )
    }

    renderButton() {
        return (
            <div>
                <p>
                    Choosing <strong>Submit</strong> means that you agree to
                    the <a href='terms_of_use'>Terms of Use</a> and <a href='privacy_policy'>Privacy Policy.</a>
                </p>
                <div className="btn">
                    <a href="#" style={!this.state.isValidEmail ? { opacity: 0.7 } : {}} onClick={this.handleSubmit}>Submit</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="form-tab-list">
                    <div className="form-top">
                        Subscribe for further information
                </div>
                    <ul>
                        <li className={(this.state.type === 'buyer' ? 'active' : '')}>
                            <a href='#' onClick={this.handleTabBuyer}>Power consumer</a>
                        </li>
                        <li className={(this.state.type === 'seller' ? 'active' : '')}>
                            <a href='#' onClick={this.handleTabSeller}>Power generator</a>
                        </li>
                    </ul>
                    <div className="form-tab">
                        <div className={"form-tab-buyer " + (this.state.type === 'buyer' ? 'active' : '')}>
                            {this.renderHeader()}
                            {this.renderForm()}
                            {this.renderButton()}
                        </div>
                        <div className={"form-tab-seller " + (this.state.type === 'seller' ? 'active' : '')}>
                            {this.renderHeader()}
                            {this.renderForm()}
                            {this.renderButton()}
                        </div>
                    </div>
                </div>
                <div id="register-success" className={"modal fade " + (this.state.isOpenModal && 'show')}>
                    <a href="/#" className="close-modal">
                        <img alt="" src="assets/img/ico-close.png" />
                    </a>
                    <div className="modal-content">
                        <h2>Thank you for signing up</h2>
                        <p>We appreciate you contacting us. We will get back to you soonest. <br /><br />
                        </p>
                        <a className="btn" href="#" onClick={() => this.setState({ isOpenModal: false })}>
                            OK
                        </a>
                    </div>
                </div>
                <div className={"overlay " + (this.state.isOpenModal && "show")} />
            </div>
        )
    }
}

export default SubscriptionTab