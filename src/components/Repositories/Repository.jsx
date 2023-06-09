import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Repository({ repo, owner, stars }) {
  const { name, description } = repo;
  const { login, avatar_url } = owner;

  return (
    <div className='w-96 rounded overflow-auto p-4 border-2  border-custom-repo-border-color'>
      <div className='flex gap-2 items-center mb-4'>
        <img
          src={avatar_url}
          alt={`${login} avatar`}
          className='w-10 h-10 object-cover rounded-full'
        />
        <Link to={`https://github.com/${login}`} className='font-bold hover:underline'>{login}</Link>
        /
        <Link to={`https://github.com/${login}/${name}`} className='font-bold hover:underline'>{name}</Link>
      </div>
      <p className='text-xs mb-4'>{description}</p>
      <div>
        <FontAwesomeIcon icon={faStar} /> {stars}
      </div>
    </div>
  )
}
