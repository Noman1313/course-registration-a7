import PropTypes from 'prop-types';

const Cart = ({ cardsData,count,remaining }) => {
    return (
        <div className='pl-5'>
            <h3>Credit Hour Remaining {remaining} hr</h3>
            <h2 className='text-2xl font-bold text-center mt-5'>Course Name</h2>
            <h1 className=''>
                {
                    cardsData.map(data => <li key={data.id}>{data.course_name}</li>)
                }
            </h1>
            <hr className='w-[90%] mt-2 border-2' />
            <h3>Total Credit Hour : {count} hr</h3>
        </div>
    );
};
Cart.propTypes = {
    cardsData: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default Cart;