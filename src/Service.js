import axios from 'axios';
import {API_BASE_URL} from './Config';

export function getSuggestions (queryString) {

    return new Promise((resolve, reject) => {
        axios.get(API_BASE_URL, {
            params: {
              s: queryString
            }
          })
          .then(function (response) {
            resolve(response.data?.Search);
          })
          .catch(function (error) {
            console.log(error);
            reject(error);
          });
    });
    
}