import ProgrammingLanguageSelect from '../components/ProgrammingLanguageSelect';
import Repositories from '../components/Repositories/Repositories';

export default function Popular() {
  return (
    <main className='min-h-screen p-10'>
      <ProgrammingLanguageSelect />
      <Repositories />
    </main>
  )
}
