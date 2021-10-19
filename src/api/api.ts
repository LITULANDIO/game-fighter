import axios from 'axios';

const gameApi = axios.create({
  baseURL: 'api'
});

export default gameApi;
