import React from 'react';
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

const Product = ({id, title, image, price, rating }) => {
    const [state , dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map(() => (<StarIcon style={{ color: "#f0c14b" }} />))}

                    {/* <StarIcon style={{ color: "yellow" }} />
                    
                    <StarIcon />
                    <StarIcon /> */}

                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;