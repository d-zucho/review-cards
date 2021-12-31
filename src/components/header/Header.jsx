import PropTypes from 'prop-types'
import './header.css'

const Header = ({ text, bgColor, textColor, height }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    height: height,
  }

  return (
    <header style={headerStyles}>
      <div className='header-title-container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
  height: '60px',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
