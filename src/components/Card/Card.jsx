import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { PiCurrencyDollarBold } from 'react-icons/pi';
import { useEffect, useState } from "react";


const Card = ({ handleClickButton, ToastContainer }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                cards.map(data => <div key={data.id} className=" bg-base-200 space-y-5 rounded-lg">
                    <figure className="px-5 pt-5">
                        <img src={data.cover_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-center space-y-5">
                        <h2 className=" text-lg font-bold">{data.course_name}</h2>
                        <p>{data.details}</p>
                        <div className="flex justify-evenly gap-14">
                            <p className='flex items-center gap-3'><PiCurrencyDollarBold/> Price : {data.price}</p>
                            <p className='flex items-center gap-3'><BsBook /> Credit : {data.credit}hr</p>
                        </div>
                        <div className="">
                            <button onClick={() => handleClickButton(data)} className="btn btn-primary mb-5">Select</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

Card.propTypes = {
    handleClickButton: PropTypes.func.isRequired,
    ToastContainer: PropTypes.object.isRequired
}

export default Card;