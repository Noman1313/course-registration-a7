import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [cardsData, setCardsData] = useState([]);

  const [count, setCount] = useState(0);

  const [remaining, setRemaining] = useState(0);

  const handleClickButton = (data) => {
    const isExist = cardsData.find(item => item.id === data.id)

    let count = data.credit;

    if (isExist) {
      return alert('booking') /**tost dite hobe */
    }
    else {

      cardsData.forEach(item => {
        count = count + item.credit
      })

      const totalRemaining = 20 - count
      if (count > 20) {
        return alert('taka nai')
      }
      else {
        setCount(count);

        setRemaining(totalRemaining);

        setCardsData([...cardsData, data]);
      }
    }
  }
  // console.log(cardsData);

  return (
    <>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto my-8 gap-5 flex border-2 border-red-500">
        <div className='w-3/4 border-2 border-green-500'>
          <Card
            handleClickButton={handleClickButton}
          ></Card>
        </div>
        <div className='w-1/4 border-2 border-green-500'>
          <Cart
            cardsData={cardsData}
            count={count}
            remaining={remaining}
          ></Cart>
        </div>

      </div>
    </>
  )
}

export default App
