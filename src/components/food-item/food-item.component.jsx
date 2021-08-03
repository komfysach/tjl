import React from 'react';

import './food-item.styles.scss';

const FoodItem = ({ id, name, price, imageUrl }) => (
    <div className="food-item">
        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="food-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>

);

export default FoodItem;
