import packageJson from '../../package.json'
import axios from 'axios'

const endPoints = packageJson.endPoints

axios.defaults.baseURL = endPoints.sample
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

export default axios