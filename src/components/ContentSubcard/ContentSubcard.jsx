import './ContentSubcard.css'

const ContentSubcard = ({ title, text, icon }) => {
  return (
    <div className='content-card_subcard'>
      <h4>{title}</h4>
      <div className='content-card_subcard-flex'>
        <div className='content-card_subcard-flex_icon'>
          {icon}
        </div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ContentSubcard