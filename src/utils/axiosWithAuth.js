import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        },
        baseURL: 'http://localhost:5000/api/articles/'
    })
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth