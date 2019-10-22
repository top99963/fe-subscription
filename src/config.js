const dev = {
    baseUrl: 'http://localhost:2222',
}

const prod = {
    baseUrl: 'http://www.reacc.io:2222/subscripe'
}

var config = process.env.NODE_ENV === 'production' ? prod : dev

export default {
    ...config
}