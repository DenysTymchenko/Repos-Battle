import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelect from '../components/LanguageSelect';
import Repositories from '../components/Repositories/Repositories';
import { getPopularRepos } from '../api';

export default function Popular() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    new URLSearchParams(location.search).get('language') || 'All'
  );
  const [repos, setRepos] = useState([]);

  // Function to update query parameter value
  const updateQueryParam = (param, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(param, value);
    const newSearch = searchParams.toString();
    navigate({ search: newSearch, replace: true });
  };

  useEffect(() => {
    setIsLoaded(false);
    updateQueryParam('language', selectedLanguage);

    getPopularRepos(selectedLanguage)
      .then(response => setRepos(response.data.items))
      .finally(() => setIsLoaded(true));
  }, [selectedLanguage]);


  return (
    <main className='min-h-screen p-10'>
      {isLoaded &&
        <>
          <LanguageSelect
            isLoaded={isLoaded}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <Repositories repos={repos} />
        </>
      }
    </main>
  );
}
