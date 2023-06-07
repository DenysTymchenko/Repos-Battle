import axios from 'axios';

export const getPopularRepos = (programmingLanguage) => {
  const url = programmingLanguage === 'All'
    ? 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'
    : `https://api.github.com/search/repositories?q=language:${programmingLanguage}&sort=stars&order=desc`
  return axios.get(url)
    .then(response => response)
    .catch(error => {
      throw error
    });
}
