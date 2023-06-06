import Repository from '../components/Repository';

export default function Popular() {
  return (
    <main className='min-h-screen p-10'>
      <div className='flex justify-center'>
        <select name='language'
                className='bg-custom-dark-light rounded p-3 border border-solid border-r-8 border-custom-dark-light'>
          <option value='javascript'>JavaScript</option>
          <option value='python' className='focus:bg-sky-500'>Python</option>
          <option value='c++'>C++</option>
        </select>
      </div>
      <div>
        <Repository />
      </div>
    </main>
  )
}
