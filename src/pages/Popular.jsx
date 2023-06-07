import ProgrammingLanguageSelect from '../components/ProgrammingLanguageSelect';
import Repositories from '../components/Repositories/Repositories';
import { getPopularRepos } from '../api';
import { useEffect, useState } from 'react';

export default function Popular() {
  const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState('All');
  const [repos, setRepos] = useState([])

  useEffect(() => {
    try {
      getPopularRepos(selectedProgrammingLanguage)
        .then(response => setRepos(response.data.items))
    } catch (error) {
      console.log(error)
    }
  }, [selectedProgrammingLanguage]);

  return (
  <main className='min-h-screen p-10'>
    <ProgrammingLanguageSelect />
    <Repositories repos={repos} />
  </main>
)
}
