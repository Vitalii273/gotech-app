import _axios from 'axios';
import { baseApiUrl } from "../consts/constants";


_axios.defaults.headers['Content-Type'] = 'application/json';
_axios.defaults.headers.Accept = 'application/json';
_axios.defaults.baseURL = baseApiUrl;

export default _axios;
