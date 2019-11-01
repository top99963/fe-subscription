import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import './ListSubscribe.css'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import path from '../path'
import { CSVLink } from "react-csv";

const initState = {
    startTime: '',
    endTime: '',
    dataTable: []
}

class ListSubscribe extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get(path.Subscribe)
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
            var { created, name, email, company, contactNumber, type } = data
            return (
                <tr key={index}>
                    <th name='created'>{created}</th>
                    <th name='company'>{company}</th>
                    <th name='name'>{name}</th>
                    <th name='email'>{email}</th>
                    <th name='contactNumber'>{contactNumber}</th>
                    <th name='type'>{type}</th>
                </tr>
            )
        })
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width:'300px'}}>Created</th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Type</th>
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
        axios.get(path.Subscribe, { params: this.state })
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
                <div className='page-list-subscribe'>
                    <div className='list-subscribe-wrap'>
                        <div className="container">
                            start <input type='date' name='startTime' onChange={this.handleChange} />
                            end <input type='date' name='endTime' onChange={this.handleChange} />
                            <button onClick={this.handleSubmit}> Submit </button>
                            <br />
                            <br />
                            {this.renderTableData()}
                            <br />
                            <button><CSVLink filename={'subscribe-list-csv'} data={this.state.dataTable}>Export CSV</CSVLink></button>
                        </div >
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListSubscribe