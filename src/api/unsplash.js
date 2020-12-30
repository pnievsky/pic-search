import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
    Authorization:
    'Client-ID XxBcujzqWoEVnqwfHX-G3LAYX2KQjPpuK34oKczc5jQ'
  }
});
