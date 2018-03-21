import Link from "next/link"
import Menu from '../components/menu'

const Page = ({
  questions = []
}) => 
  <div>
    <Menu />
    <h1>Public Questions</h1>
    <ul>
      {questions.map(q => <li>{q}</li>)}
    </ul>
  </div>

Page.getInitialProps = () => ({
  // TODO get these from server
  questions: [
    "what is my hair colour?",
    "where do I work?",
    "what is my passion?",
    "what did I speak about?",
    "how many people did I manage in my team?",
    "what technologies do I program in?",
    "what's my musical influence?",
  ]
})

export default Page
