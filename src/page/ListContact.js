import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import './ListContact.css'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import path from '../path'
import { CSVLink } from "react-csv";

const initState = {
    startTime: '',
    endTime: '',
    dataTable: []
}

class ListContact extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get(path.Contact)
            .then(res => {
                console.log(res.data)
                this.setState({ dataTable: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }

    renderTableData() {
        var value = this.state.dataTable.map((data, index) => {
            var { created, name, email, topic, message } = data
            return (
                <tr key={index}>
                    <th name='created'>{created}</th>
                    <th name='name'>{name}</th>
                    <th name='email'>{email}</th>
                    <th name='topic'>{topic}</th>
                    <th name='message'>{message}</th>
                </tr>
            )
        })
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width:'210px'}}>Created</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Topic</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {value}
                </tbody>
            </Table>
        )
    }

    handleSubmit() {
        console.log(this.state)
        axios.get(path.Contact, { params: this.state })
            .then(res => {
                console.log(res.data)
                this.setState({ dataTable: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleChange(event) {
        var { name, value } = event.target
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div>
                <NavBar />
                <div className='page-list-contact'>
                    <div className='list-contact-wrap'>
                        <div className="container">
                            start <input type='date' name='startTime' onChange={this.handleChange} />
                            end <input type='date' name='endTime' onChange={this.handleChange} />
                            <button onClick={this.handleSubmit}> Submit </button>
                            <br />
                            <br />
                            {this.renderTableData()}
                            <br />
                            <button><CSVLink filename={'contact-list-csv'} data={this.state.dataTable}>Export CSV</CSVLink></button>
                        </div >
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListContact