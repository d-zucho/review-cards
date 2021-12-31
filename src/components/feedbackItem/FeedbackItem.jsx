import Card from '../card/Card'
import './feedbackItem.css'

const FeedbackItem = ({ item }) => {
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
