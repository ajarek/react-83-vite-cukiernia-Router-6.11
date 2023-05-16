import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { Form } from '../../components/Form/Form'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='contact'>
      <div className='left-wrapper'>
        <h1>Kontakt</h1>
        <a
          className={'link'}
          href='tel:+48573219230'
        >
          <FaPhoneAlt /> +48 573 219 230
        </a>
        <a
          className={'link'}
          href='mailto:ajarek@poczta.onet.pl'
        >
          <FaMailBulk /> ajarek@poczta.onet.pl
        </a>
        <a href='#'>
          <FaMapMarkerAlt /> Poland Kołobrzeg{' '}
        </a>
      </div>
      <div className='right-wrapper'>
        <p>Napisz do Nas 🖊️ :</p>
        <Form />
      </div>
      <div className='footer'>
        <a
          className={'link'}
          href='mailto:ajarek@poczta.onet.pl'
        >
          <div className='logo'>
            <img
              src='my-logo.png'
              alt='logo'
            />
            @jarek
          </div>
        </a>
        <div className='socials'>
          <div className='social'>
            <a href='#'>
              <FaGithub />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaFacebook />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
