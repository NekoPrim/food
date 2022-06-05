import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Oi-gL1i9bWZ82Qfq5VuJGzaoapHGUkCwd2VgL9N7WHU-wpUlbZe1sMrEhucwJp9VqgXmlNyqpIo38YyDuKtuHtersgv8eCTK6D2F57q2SREVhnUN0BZv-jDn2rqXYnYx'
    }
});
