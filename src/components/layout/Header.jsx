import { Link } from "react-router-dom";

export default function Header() {
  const headerLinks = [
    {
      title: 'Home',
      component: '',
    },
    {
      title: 'Popular',
      component: '',
    },
    {
      title: 'Battle',
      component: '',
    },
  ];
  
  return (
    <header className="bg-custom-dark-light p-3 text-lg">
      <nav>
        <ul className="flex gap-10">
          {headerLinks.map(headerLink =>
            <li
              key={headerLink.title}
              className="inline-block hover:text-custom-header-link-hover"
            >
              <Link to={headerLink.component}>{headerLink.title}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
