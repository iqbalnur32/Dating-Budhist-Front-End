import axios from "axios"

const instance = axios.create({
    baseURL: 'https://pass-sistem.com/'
})

export default instance;