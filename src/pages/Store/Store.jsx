import React from 'react'
import './Store.css'
const Store = () => {
  return (
    <div className='store'>
      <h1>
        <span className='black'>Nasz </span>
        <span className='pink'>Sklep</span>
      </h1>
      <div className='products'>
        <button>Wszystko</button>
        <button>Ciastka</button>
        <button>Babeczki</button>
        <button>Słodycze</button>
        <button>Pączki</button>
      </div>
      <div className="search"><input type="search" name="" id="" /></div>
      <div className="list">
        <div className="card">
          <div className="card-img">
            <img src="/img/ciasto1.jpg" alt="ciastko" />
          </div>
          <div className="product-data">
              <span className='product-name'>ciasto1 </span>    
              <span className='product-price'>12 PLN</span>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
