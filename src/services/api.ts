import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/'

export const api = axios.create({
    baseURL
})