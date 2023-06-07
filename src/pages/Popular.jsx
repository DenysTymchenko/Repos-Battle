import ProgrammingLanguageSelect from '../components/ProgrammingLanguageSelect';
import Repositories from '../components/Repositories/Repositories';
import { getPopularRepos } from '../api';
import { useEffect, useState } from 'react';

export default function Popular() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState('All');
  const [repos, setRepos] = useState([])

  useEffect(() => {
    setIsLoaded(false);
    try {
      getPopularRepos(selectedProgrammingLanguage)
        .then(response => setRepos(response.data.items))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoaded(true);
    }
  }, [selectedProgrammingLanguage]);

  return (
    <main className='min-h-screen p-10'>
      {isLoaded && (
        <>
          <ProgrammingLanguageSelect />
          <Repositories repos={repos} />
        </>
      )}
    </main>
  )
}
