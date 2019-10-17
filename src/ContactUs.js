import React from 'react'
import axios from 'axios'
import config from './config'

const { baseUrl } = config
const initState = {
    topic: '',
    name: '',
    email: '',
    message: ''
}

class ContactUs extends React.Component {
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
        axios.post(baseUrl + '/contact_us', this.state)
            .then(res => {
                if (res.data) {
                    alert('success')
                }
            })
            .catch(err => {
                console.log(err)
                alert('error')
            })
            .then(() => {
                this.setState({ ...initState })
            })
    }

    render() {
        return (
            <div>
                <h1>Contact us</h1>
                <form>
                    <input name='topic' value={this.state.topic} onChange={this.handleChange} placeholder='topic' /> <br />
                    <input name='name' value={this.state.name} onChange={this.handleChange} placeholder='your name' />
                    <input name='email' value={this.state.email} onChange={this.handleChange} placeholder='your email' /> <br />
                    <textarea rows='4' cols='41' name='message' value={this.state.message} onChange={this.handleChange} placeholder='your message' /> <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <p>PTT Innovation Lab (ExpressSo)</p>
                <p>PTT Public Company Limited (PTT)</p>
                <p>555 Vibhavadi Rangsit Road | Chatuchak | Bangkok 10900 | Thailand</p>
                <p>Email: pttexpresso@pttplc.com</p>
                <p>Call: +66-2-537-4112</p>
                <p>Google Map (BYI to put Google Map)</p>
            </div>
        )
    }
}

export default ContactUs