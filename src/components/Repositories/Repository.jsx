import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Repository() {
  return (
    <div className='w-96 rounded p-4 border-2  border-custom-repo-border-color'>
      <div className='flex gap-2 items-center mb-4'>
        <img
          src='./linkedin.jpg'
          alt='user avatar'
          className='w-10 h-10 object-cover rounded-full'
        />
        <a href='#' className='font-bold hover:underline'>User</a>
        /
        <a href='#' className='font-bold hover:underline'>Repo</a>
      </div>
      <p className='text-xs mb-4'>LYGIA, it's a granular and multi-language (GLSL, HLSL, WGSL, MSL and CUDA) shader library designed for
         performance and flexibility</p>
      <div>
        <FontAwesomeIcon icon={faStar} /> 20
      </div>
    </div>
  )
}
