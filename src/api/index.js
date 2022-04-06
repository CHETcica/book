import axios from 'axios';

export default axios.create({
  baseURL: 'https://se-book-store.herokuapp.com/api/v1'
});
