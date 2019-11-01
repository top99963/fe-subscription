import config from './config'
const { baseUrl } = config

export default {
    Login: baseUrl + '/login',
    Contact: baseUrl + '/contact_us',
    Subscribe: baseUrl + '/subscribe'
}