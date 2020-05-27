import axios from 'axios';

class Api {
    /**
     * @returns {string}
     * @constructor
     */
    static get BASE_URL() { return process.env.VUE_APP_API_BASE_URL; }
    
    /**
     * @returns {{PATH: string, HEAD: string, DELETE: string, POST: string, GET: string, OPTIONS: string, PUT: string}}
     * @constructor
     */
    static get METHODS() {
        return {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete',
            OPTIONS: 'options',
            PATH: 'path',
            HEAD: 'head',
        };
    }
    
    /**
     * @param {string} url
     * @param {string} method
     * @param {object|null} data
     * @param {object} headers
     * @returns {Promise<*>}
     */
    static async request(url, method = Api.METHODS.GET, data = null, headers = {}) {
        axios.defaults.headers.common = {
            ...axios.defaults.headers.common || {},
            ...headers,
        };
        
        try {
            const response = await axios[method.toLowerCase()](`${Api.BASE_URL}${url}`, data);
            if (response.data.error) {
                console.error(response.data.error);
                return [];
            }
            
            return response.data;
        } catch (e) {
            console.error(e.message || e);
            return [];
        }
    }
}

export default Api;
