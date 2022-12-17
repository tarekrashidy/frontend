import axios from 'axios';
import React from 'react'
const AxiosClient = (token) => {
    axios.interceptors.request.use(request => {
let token=localStorage.getItem('token')
        if (token) {
            request.headers.Authorization = `Bearer ${ token }`
    
}

        return request;
    })



}

export default AxiosClient