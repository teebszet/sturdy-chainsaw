import Link from 'next/link'
import './menu.scss'

const Menu = ({
  pages = [
    { label: 'Home', link: 'index' },
    { label: 'Me', link: 'question' },
    { label: 'Questions', link: 'public-questions' },
  ]
}) =>
  <nav>
    <ul className='nav__menu'>
      {pages.map(({link, label}) =>
        <Link key={link} href={`/${link}`}>
          <li className='menu__item'>
            <a>{label}</a>
          </li>
        </Link>
      )}
    </ul>
  </nav>

export default Menu
