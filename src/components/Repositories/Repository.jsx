import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Repository(
  {
    repoName,
    description,
    stars,
    author,
    avatarLink
  }
) {
  return (
    <div className='w-96 rounded p-4 border-2  border-custom-repo-border-color'>
      <div className='flex gap-2 items-center mb-4'>
        <img
          src={avatarLink}
          alt={`${author} avatar`}
          className='w-10 h-10 object-cover rounded-full'
        />
        <Link to={`https://github.com/${author}`} className='font-bold hover:underline'>{author}</Link>
        /
        <Link to={`https://github.com/${author}/${repoName}`} className='font-bold hover:underline'>{repoName}</Link>
      </div>
      <p className='text-xs mb-4'>{description}</p>
      <div>
        <FontAwesomeIcon icon={faStar} /> {stars}
      </div>
    </div>
  )
}
