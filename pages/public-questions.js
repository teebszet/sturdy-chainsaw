import Link from "next/link"
import Menu from '../components/menu'

const Page = ({
  questions = []
}) => 
  <div>
    <Menu />
    <h1>Public Questions</h1>
    <ul>
      {questions.map(({id, question}) => 
        <li key={id}>{question}</li>
      )}
    </ul>
  </div>

Page.getInitialProps = () => ({
  // TODO get these from server
  questions: [
    { id: '1', question: "how does a monkey eat a banana?" },
    { id: '2', question: "where do I work?" },
    { id: '3', question: "what is my passion?" },
    { id: '4', question: "what did I speak about?" },
    { id: '5', question: "how many people did I manage in my team?" },
    { id: '6', question: "what technologies do I program in?" },
    { id: '7', question: "what's my musical influence?" },
  ]
})

export default Page
