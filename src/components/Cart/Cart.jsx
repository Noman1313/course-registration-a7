import PropTypes from 'prop-types';

const Cart = ({ cardsData,count,remaining,coursePrice}) => {
    return (
        <div className='pl-5 space-y-4'>
            <h3 className='text-xl font-bold text-center text-blue-400'>Credit Hour Remaining {remaining} hr</h3>
            <hr className='w-[95%] border-2' />
            <h2 className='text-2xl font-bold text-center '>Course Name</h2>
            <h1 className='font-semibold'>
                {
                    cardsData.map(data => <li key={data.id}>{data.course_name}</li>)
                }
            </h1>
            <hr className='w-[95%] border-2' />
            <h3>Total Credit Hour : {count} hr</h3>
            <hr className='w-[95%] border-2' />
            <h3>Total Price : {coursePrice} USD</h3>
        </div>
    );
};
Cart.propTypes = {
    cardsData: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    coursePrice: PropTypes.number.isRequired
}

export default Cart;