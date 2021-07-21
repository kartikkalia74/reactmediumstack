import axios from 'axios';

export {default as privateApi} from './private'
export { default as publicApi} from './public' 
export const baseUrl = 'http://localhost:3001'
export const instance = axios.create({baseURL:baseUrl,})
