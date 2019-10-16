const dev = {
    baseUrl: 'http://localhost:2222',
}

const prod = {
    baseUrl: 'http://www.expresso-origin.pttplc.com:2222'
}

var config = process.env.NODE_ENV === 'production' ? prod : dev

export default {
    ...config
}