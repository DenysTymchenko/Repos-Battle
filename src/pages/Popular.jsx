import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSelect from '../components/LanguageSelect';
import Repositories from '../components/Repositories/Repositories';
import { getPopularRepos } from '../api';

export default function Popular() {
  const location = useLocation(); // will be used for work with url
  const navigate = useNavigate(); // will be used to navigate to page with different language param.
  const searchParams = new URLSearchParams(location.search);

  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get('language') || 'All');
  const [repos, setRepos] = useState([]);

  const updateQueryParam = (param, value) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
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
      {isLoaded && (
        <>
          <LanguageSelect
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <Repositories repos={repos} />
        </>
      )}
    </main>
  );
}
