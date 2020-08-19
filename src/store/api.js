import axios from 'axios';

export default axios.create({
    baseURL: `http://dummy.restapiexample.com/api/v1/`,
    headers: {
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: false
});