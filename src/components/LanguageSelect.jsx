export default function LanguageSelect({ selectedLanguage, setSelectedLanguage }) {
  const programmingLanguages = [
    'All',
    'JavaScript',
    'Python',
    'C++',
  ];

  return (
    <div className='flex justify-center'>
      <select
        name='language'
        className='bg-custom-dark-light rounded p-3 border border-solid border-r-8 border-custom-dark-light'
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {programmingLanguages.map((programmingLanguage) => (
          <option key={programmingLanguage} value={programmingLanguage}>
            {programmingLanguage}
          </option>
        ))}
      </select>
    </div>
  )
}
