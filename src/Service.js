import axios from 'axios';
import {API_BASE_URL} from './Config';

export function getSuggestions (queryString) {
    axios.get(API_BASE_URL, {
        params: {
          s: queryString
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}