import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import { useLoaderData } from 'react-router-dom'
import './Store.css'

export const storeLoader = async () => {
  let response = await fetch('src/assets/data.json')
  let dataJson = await response.json()
  return dataJson
}
const Store = () => {
  const [filterProducts, setFilterProducts] = useState('all')
  const [searchText, setSearchText] = useState('')
  const { shoppingList, setShoppingList } = useContext(AppContext)
  const products = useLoaderData()

  return (
    <div className='store'>
      
      <h1>
        <span className='black'>Nasz </span>
        <span className='pink'>Sklep</span>
      </h1>

      <div className='products'>
        <button onClick={() => setFilterProducts('all')}>Wszystko</button>
        <button onClick={() => setFilterProducts('ciastka')}>Ciastka</button>
        <button onClick={() => setFilterProducts('babeczki')}>Babeczki</button>
        <button onClick={() => setFilterProducts('słodycze')}>Słodycze</button>
        <button onClick={() => setFilterProducts('pączki')}>Pączki</button>
      </div>

      <div className='search'>
        <input
          type='search'
          placeholder='🔍 Szukaj'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className='list'>
        {products
          .filter((pr) =>
            pr.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .filter(
            (pr) => pr.category === filterProducts || filterProducts === 'all'
          )
          .map((dt) => {
            return (
              <div
                className='card'
                key={dt.id}
              >
                <div className='card-img'>
                  <img
                    src={dt.src}
                    alt='ciastko'
                  />
                </div>
                <div className='product-data'>
                  <span className='product-name'>{dt.name} </span>
                  <span className='product-price'>{dt.price} PLN</span>
                  <span
                    id={dt.id}
                    className='add-cart'
                    onClick={(e) =>
                      setShoppingList([...shoppingList, e.target.id])
                    }
                  >
                    🛒
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Store
