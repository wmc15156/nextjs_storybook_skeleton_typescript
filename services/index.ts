import axios from 'axios';

import { apiEndpoint } from '@config/app';

axios.defaults.baseURL = apiEndpoint;
axios.defaults.withCredentials = true;

export { default as userService } from './user';
