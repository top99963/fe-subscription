import config from './config'
const { baseUrl } = config

var Login = baseUrl + '/login'
var Contact = baseUrl + '/contact_us'

export default {
    Login,
    Contact
}