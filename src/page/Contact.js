import React from 'react'
import axios from 'axios'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ModalRegistor from '../component/ModalRegistor'
import path from '../path'
import './Contact.css'

const initState = {
    topic: '',
    name: '',
    email: '',
    message: '',
    isModalOpen: false
}

class Contact extends React.Component {
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

    handleSubmit(event) {
        event.preventDefault()

        axios.post(path.Contact, this.state)
            .then(res => {
                // if (res.data) {
                // }
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                this.setState({ ...initState, isModalOpen: true })
            })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="page-contact">
                    <div className="hero-image">
                        <h1>Contact us</h1>
                    </div>
                    <div className="contact-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="contact-detail">
                                        <h2>ADDRESS</h2>
                                        <label>PTT Innovation Lab (ExpressSo)</label>
                                        <label>PTT Public Company Limited (PTT)</label>
                                        <p>555 Vibhavadi Rangsit Road Chatuchak Bangkok 10900 Thailand</p>
                                        <a className="btn-map" href="https://goo.gl/maps/dQyYUqY3RtvEqziF8" target="_blank"  rel="noopener noreferrer">
                                            Get direction
                                        </a>
                                        <div className="contact-interact">
                                            <div className="row">
                                                <div className="col">
                                                    <a className="btn-mail" href="mailto:info@reacc.io">
                                                        <span>Email<br />
                                                            <span>info@reacc.io</span></span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="btn-call" href="tel:66-2-537-4112">
                                                        <span>Call<br />
                                                            <span>+66-2-537-4112</span></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="contact-form">
                                        <h2>HOW MAY WE ASSIST YOU?</h2>
                                        <p>Fill out the form below to send your message to ReAcc.</p>
                                        <form>
                                            <div className="form-group f-line">
                                                <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                                            </div>
                                            <div className="form-group f-line">
                                                <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                                            </div>
                                            <div className="form-group ">
                                                <input name="topic" value={this.state.topic} onChange={this.handleChange} placeholder="Topic" />
                                            </div>
                                            <div className="form-group ">
                                                <textarea value={this.state.message} rows={4} cols={41} name="message" onChange={this.handleChange} placeholder="Message" />
                                            </div>
                                            <div className="form-group ">
                                                <button onClick={this.handleSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ModalRegistor
                    active={this.state.isModalOpen}
                    handleClick={() => { this.setState({ isModalOpen: false }) }}
                    title='Thank you for your message'
                    detail='We will get back to you soonest.'
                />
            </div>

        )
    }
}

export default Contact