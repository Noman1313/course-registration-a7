import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cardsData, setCardsData] = useState([]);

  const [count, setCount] = useState(0);

  const [remaining, setRemaining] = useState(20);

  const [coursePrice, setCoursePrice] = useState(0);

  const handleClickButton = (data) => {
    const isExist = cardsData.find(item => item.id === data.id)

    let count = data.credit;
    let price = data.price;

    if (isExist) {
      return toast.error('already selected this course !!!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
    else {

      cardsData.forEach(item => {
        count = count + item.credit;
        price = price + item.price;
      })

      const totalRemaining = 20 - count
      if (count > 20) {
        return toast.error('Limited to 20 hours !!!', {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        setCount(count);

        setCoursePrice(price);

        setRemaining(totalRemaining);

        setCardsData([...cardsData, data]);
      }
    }
  }
  

  return (
    <>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto my-8 gap-5 flex ">
        <div className='w-3/4 '>
          <Card
            handleClickButton={handleClickButton}
            ToastContainer={ToastContainer}
          ></Card>
        </div>
        <div className='w-1/4 '>
          <Cart
            cardsData={cardsData}
            count={count}
            remaining={remaining}
            coursePrice={coursePrice}
          ></Cart>
        </div>

      </div>
    </>
  )
}

export default App
