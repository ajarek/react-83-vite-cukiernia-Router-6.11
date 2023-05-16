import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { useLoaderData } from 'react-router-dom'
import Counter from '../../components/Counter/Counter'
import './Cart.css'
export const cartLoader = async () => {
  let response = await fetch('src/assets/data.json')
  let dataJson = await response.json()
  return dataJson
}

const Cart = () => {
  const dataLoader = useLoaderData()
  const { shoppingList, setShoppingList } = useContext(AppContext)
  const [allValues, setAllValues] = useState([])
  const [cartProducts, setCartProducts] = useState(
    dataLoader.filter((dt) => shoppingList.includes(dt.id))
  )

  const deleteItem = (id, index) => {
    const deleteFilter = cartProducts.filter((c) => c.id !== id)
    setCartProducts(deleteFilter)
    let newShoppingList = shoppingList.filter((el, inx) => inx !== index)
    setShoppingList(newShoppingList)
  }

  useEffect(() => {
    const allNode = [...document.querySelectorAll('.value')]
    const newAllValues = allNode.map((el) => +el.textContent)
    return setAllValues(newAllValues)
  }, [cartProducts])

  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <th>Miniatura</th>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>Cena PLN</th>
            <th>Wartość PLN</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((el, index) => {
            return (
              <tr
                className='cart-wrapper'
                key={el.id}
              >
                <td>
                  <img
                    src={el.src}
                    alt=''
                    className='thumbnail'
                  />
                </td>

                <td> {el.name} </td>
                <td>
                  <Counter />
                </td>
                <td>{el.price}</td>
                <td className='value'>{(1 * el.price).toFixed(2)}</td>
                <td onClick={() => deleteItem(el.id, index)}>❌</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              className='all-sum'
              colSpan='7'
            >
              Do zapłaty PLN:{' '}
              {allValues.reduce((sum, el) => sum + el, 0).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td
              className='all-sum'
              colSpan='7'
            >
              <a
                href='https://www.paypal.com/pl/home'
                target={'_blank'}
              >
                Zamawiam i Płacę
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
