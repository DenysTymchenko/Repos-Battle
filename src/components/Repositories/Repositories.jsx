import Repository from './Repository';

export default function Repositories({ repos }) {
  return (
    <div className='flex justify-center flex-wrap gap-4	p-4'>
      {repos.map(repo => (
        <Repository
          key={repo.id}
          repoName={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
          author={repo.owner.login}
          avatarLink={repo.owner.avatar_url}
        />
      ))}
    </div>
  )
}
