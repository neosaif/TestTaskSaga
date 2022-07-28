
import axios from 'axios'
import {Appconfig} from "../../config/config";

const Header = {
    Accept: 'application/json',
    Connection: 'close'
};

const request = axios.create({
    baseURL: Appconfig.BASE_URL,
    headers: Header,
});

export { request };
