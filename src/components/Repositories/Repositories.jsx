import Repository from './Repository';

export default function Repositories({ repos }) {
  return (
    <div className='flex justify-center flex-wrap gap-4	p-4'>
      {repos.map(repo => (
        <Repository
          key={repo.id}
          repo={repo}
          owner={repo.owner}
          stars={repo.stargazers_count}
        />
      ))}
    </div>
  )
}
