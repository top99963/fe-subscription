import React from 'react'
import axios from 'axios'
import config from './config'

const { baseUrl } = config
const initState = {
    type: 'buyer',
    name: '',
    email: '',
    company: '',

    // seller
    mwInstalled: '',
    renewableType: '',
    expectedPrice: '',

    // buyer
    interestProducts: '',
    demandVolume: '',
    price: ''
}

class SubscriptionTab extends React.Component {
    constructor() {
        super()
        this.state = { ...initState, type: 'buyer' }
        this.handleTabBuyer = this.handleTabBuyer.bind(this)
        this.handleTabSeller = this.handleTabSeller.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
    }


    handleTabSeller() {
        console.log(this.state)
        if (this.state.type !== 'seller') {
            this.setState({
                ...initState,
                type: 'seller'
            })
        }
    }

    handleTabBuyer() {
        console.log('buyer')
        console.log(this.state)
        if (this.state.type !== 'buyer') {
            this.setState({
                ...initState,
                type: 'buyer'
            })
        }
    }

    handleChange(event) {
        var { name, value } = event.target
        this.setState({ [name]: value })
    }


    handleDropDownChange(event) {
        this.setState({ renewableType: event.target.value })
    }

    handleSubmit(e) {
        axios.post(baseUrl + '/subscription', this.state)
            .then(res => {
                if (res.data) {
                    console.log('success')
                    this.setState(prevState => ({
                        ...initState,
                        type: prevState.type
                    }))
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderHeader() {
        var headerText = this.state.type === 'buyer' ? 'Buying renewables' : 'Selling energy registration'
        var bodyText = this.state.type === 'buyer' ? 'Learn how we can help you achieverenewable energy target, sign up for more information and demo' : 'Directly from projects, please fill in the form below if you would like our help connecting with power plans.'

        return (
            <div>
                <h4>{headerText}</h4>
                <p>{bodyText}</p>
            </div>
        )
    }

    renderForm() {
        var sellerForm = (
            <div>
                <div className="form-group">
                    <input name='name' value={this.state.name} placeholder="Contact name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='email' value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='company' value={this.state.company} placeholder="Company" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='mwInstalled' value={this.state.mwInstalled} placeholder="Installed Capacity(MW)" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <select onChange={this.handleDropDownChange} value={this.state.renewableType}>
                        <option value="">Select</option>
                        <option value="wind">wind</option>
                        <option value="solar">solar</option>
                        <option value="hyro">hyro</option>
                        <option value="bipmass">bipmass</option>
                    </select>
                </div>
                <div className="form-group">
                    <input name='expectedPrice' value={this.state.expectedPrice} placeholder="Expected Price" onChange={this.handleChange} />
                </div>
            </div>
        )
        var buyerForm = (
            <div >
                <div className="form-group">
                    <input name='name' value={this.state.name} placeholder="Contact name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='email' value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='company' value={this.state.company} placeholder="Company" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='interestProducts' value={this.state.interestProducts} placeholder="Interest Products" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='demandVolume' value={this.state.demandVolume} placeholder="Demand volume" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input name='price' value={this.state.price} placeholder="Price" onChange={this.handleChange} />
                </div>
            </div>
        )

        var resultForm = this.state.type === 'seller' ? sellerForm : buyerForm
        return resultForm
    }

    renderButton() {
        return (
            <div>
                <p>
                    Choosing <strong>Submit</strong> means that you agree to
                    the <a href>Terms of Use</a> and <a href>Privacy Policy.</a>
                </p>
                <div className="btn">
                    <a href='/#' onClick={this.handleSubmit}>Submit</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="form-tab-list">
                <div className="form-top">
                    Subscribe for further information
                </div>
                <ul>
                    <li className='active'>
                        <a href='/#' onClick={this.handleTabBuyer}>Power consumer</a>
                    </li>
                    <li>
                        <a href='/#' onClick={this.handleTabSeller}>Power generator</a>
                    </li>
                </ul>
                <div className="form-tab">
                    <div className="form-tab-buyer active ">
                        {this.renderHeader()}
                        {this.renderForm()}
                        {this.renderButton()}
                    </div>
                    <div className="form-tab-seller ">
                        {this.renderHeader()}
                        {this.renderForm()}
                        {this.renderButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscriptionTab