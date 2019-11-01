import React from 'react'
import './Resting.css'

class Resting extends React.Component {
    render() {
        return (
            <div className='resting-page'>
                    <button onClick={() => window.location.href = 'list_subscribe'}> List subscribe</button>
                    <button onClick={() => window.location.href = 'list_contact'}> List contact us</button>
                    <button onClick={() => window.location.replace('http://www.expresso-origin.pttplc.com:8545')}> Black page</button>
            </div>
        )
    }
}

export default Resting