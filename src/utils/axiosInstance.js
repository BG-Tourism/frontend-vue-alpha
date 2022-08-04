import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
    withCredentials: true,
    timeout: 15000
})

export default instance
