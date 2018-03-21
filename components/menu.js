import Link from 'next/link'

const Menu = ({
  pages = [
    { label: 'Home', link: 'index' },
    { label: 'Me', link: 'question' },
    { label: 'Questions', link: 'public-questions' },
  ]
}) =>
  <ul> 
    {pages.map(page =>
      <Link href={`/${page.link}`}>
        <li>
          <a>{page.label}</a>
        </li>
      </Link>
    )}
  </ul>

export default Menu
