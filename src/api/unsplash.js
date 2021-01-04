import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CGDnN_lOXjyVkuwKo0FQ5JJytPb8Q4L1xVi6GM4tn-8'
    }
})