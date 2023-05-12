
import { useLoaderData} from 'react-router-dom'
import data from '../../assets/data.json'
import './Store.css'
export const storeLoader = () => {
  const products = data || []
  return products
}
const Store = () => {
  const products = useLoaderData()
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
      <div className="search"><input type="search" placeholder='🔍 Szukaj' id="" /></div>
      <div className="list">
        {products.map((dt)=>{
          return(
        <div className="card" key={dt.id}>
          <div className="card-img">
            <img src={dt.src} alt="ciastko" />
          </div>
          <div className="product-data">
              <span className='product-name'>{dt.name} </span>    
              <span className='product-price'>{dt.price} PLN</span>
              <span id={dt.id} className='add-cart' onClick={(e)=>console.log(e.target.id)}>🛒</span>    
          </div>
        </div>
        )
       })}
      </div>
    </div>
  )
}

export default Store
