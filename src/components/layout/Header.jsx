import { NavLink } from 'react-router-dom';

export default function Header() {
  const headerLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Popular',
      path: '/popular',
    },
    {
      title: 'Battle',
      path: '/',
    },
  ];

  return (
    <header className='bg-custom-dark-light p-3 text-lg'>
      <nav>
        <ul className='flex gap-10'>
          {headerLinks.map(headerLink =>
            <li
              key={headerLink.title}
              className='inline-block hover:text-custom-header-link-hover'
            >
              <NavLink
                to={headerLink.path}
                className={({ isActive }) => isActive ? 'font-bold' : ''}
              >
                {headerLink.title}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
