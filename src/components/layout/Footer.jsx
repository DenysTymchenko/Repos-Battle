import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const footerLinks = [
    {
      link: 'https://github.com/DenysTymchenko',
      icon: faGithub,
    },
    {
      link: 'https://t.me/DenysTymchenko',
      icon: faTelegram,
    },
    {
      link: 'mailto:tymchenko.denys@gamil.com',
      icon: faEnvelope,
    },
    {
      link: 'https://www.linkedin.com/in/denys-tymchenko-0031b1251/',
      icon: faLinkedin,
    },
  ]

  return (
    <footer className="flex flex-col items-center gap-2 bg-custom-dark-light p-3 text-lg">
      <p>Created by Denys Tymchenko</p>
      <div className='links'>
        {footerLinks.map(footerLink =>
          <a
            key={footerLinks.indexOf(footerLink)}
            href={footerLink.link}
            className="mr-5 text-2xl"
          >
            <FontAwesomeIcon icon={footerLink.icon} />
          </a>
        )}
      </div>
    </footer>
  )
}
