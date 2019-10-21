import React from 'react'

const initState = {}

class ProductsPage extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
    }

    render() {
        return (
            <h1>Hi !</h1>
        )
    }
}

export default ProductsPage