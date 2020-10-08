import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-bc858.firebaseio.com/'
});

export default instance;