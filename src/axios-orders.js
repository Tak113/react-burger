import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://datak-mioburger-default-rtdb.firebaseio.com/'
});

export default instance;

