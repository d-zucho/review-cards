import Card from '../card/Card'
import './feedbackItem.css'

const FeedbackItem = ({ item }) => {
  return (
    <Card className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
