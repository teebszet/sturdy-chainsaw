import Link from 'next/link'
import Menu from '../components/menu'

export default () =>
  <div>
    <Menu />
    <h1>what is your question?</h1>
    <form>
      <input></input>
      <Link href="/public-questions">
        <button value="->"></button>
      </Link>
    </form>
  </div>
