import PropTypes from 'prop-types'; 
import { useEffect, useState } from "react";


const Card = ({handleClickButton, ToastContainer}) => {
    
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                cards.map(data => <div key={data.id} className="card bg-base-200 ">
                    <figure className="px-10 pt-10">
                        <img src={data.cover_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">{data.course_name}</h2>
                        <p>{data.details}</p>
                        <div className="flex gap-20">
                            <p>Price : {data.price}</p>
                            <p>Credit : {data.credit}hr</p>
                        </div>
                        <div className="card-actions">
                        <button onClick={()=>handleClickButton(data)} className="btn btn-primary">Select</button>
                        <ToastContainer />
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

Card.propTypes={
    handleClickButton: PropTypes.func.isRequired,
    ToastContainer: PropTypes.object.isRequired
}

export default Card;