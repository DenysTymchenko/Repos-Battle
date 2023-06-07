import axios from 'axios';

export const getPopularRepos = (programmingLanguage) => {
   return axios.get(`https://api.github.com/search/repositories?q=stars:>1&language:${programmingLanguage}sort=desc&type=Repositories`)
     .then(response => response)
     .catch(error => console.log(error));
}
