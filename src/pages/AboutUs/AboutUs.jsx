import { Link } from 'react-router-dom'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="info">
        <h1><span className='black'>o </span><span className='pink'>Nas</span></h1>
        <div className="text">Nasza internetowa Cukiernia  powstała z wieloletniej pasji do przygotowywania pysznych wypieków. Każdego dnia dokładamy wszelkich starań, by zachwycić naszych klientów smakiem przygotowywanych ciast oraz tortów. Nasza oferta jest komponowana w taki sposób, by była różnorodna i mogła wpasować się we wszystkie gusta. Zapraszamy do składania zamówień na nasze produkty.</div>
        <Link className="link-store" to={'/store'}>Sklep</Link>
      </div>
      <div className="img">
        <div className="wrapper-img">
          <img src="./img/imgOnas.jpg" alt="cookie" width={'70%'} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs