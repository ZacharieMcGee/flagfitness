import { Link } from 'react-router-dom'

import './Button1.css'

const Button1 = ({ text }) => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <Link 
      to={`${baseUrl}${text}`}
      className='btn'
    >
      {text.toUpperCase()}
    </Link>
  )
}

export default Button1