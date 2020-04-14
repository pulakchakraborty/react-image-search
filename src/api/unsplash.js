import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID ACCESS_KEY'  // Change it with your own access key from unsplash api
    }
});
