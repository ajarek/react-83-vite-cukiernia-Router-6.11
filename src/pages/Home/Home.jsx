import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <h1>
        <span className='white'>Witamy w </span>
        <span className='pink'>Cukierni</span>
      </h1>
      <Link
        className='link'
        to={'/store'}
      >
        🍰 Odkryj
      </Link>
    </div>
  )
}

export default Home
