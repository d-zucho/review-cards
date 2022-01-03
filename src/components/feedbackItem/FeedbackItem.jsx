import { FaTimes } from 'react-icons/fa'

import PropTypes from 'prop-types'
import Card from '../card/Card'
import './feedbackItem.css'

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card className='card' reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
