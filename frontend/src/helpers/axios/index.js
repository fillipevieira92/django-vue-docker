import axios from 'axios'

const http = axios.create()


http.defaults.baseURL = "http://localhost:3000"
//http.defaults.headers = {"Content-Type":"application/json"}

http.create()

export default http
