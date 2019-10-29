import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 82440269018abcac9749aac57a4b77a1aa8c239214934214a53ffa7fadb66b7a'
    }
});

