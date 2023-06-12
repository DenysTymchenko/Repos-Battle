import axios from 'axios';

export const getPopularRepos = (programmingLanguage) => {
    return axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${programmingLanguage}&sort=stars&order=desc`)
    .then(response => response)
    .catch(error => {
      throw error
    });
}
