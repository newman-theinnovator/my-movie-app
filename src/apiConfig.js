import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fc715859d15d23a03b85d12d791a9217',
  },
});

export default instance;
