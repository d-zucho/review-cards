import { useState } from 'react'
import Header from './components/header/Header'
import FeedbackList from './components/feedbackList/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/card/Card'
//? Styles
import './App.css'
import GiveFeedback from './components/giveFeedback/GiveFeedback'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className='container'>
        <GiveFeedback />
        <FeedbackList setFeedback={setFeedback} feedback={feedback} />
        <Card>Hello World</Card>
      </div>
    </>
  )
}

export default App
