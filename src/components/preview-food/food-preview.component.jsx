import React from 'react';

import FoodItem from '../food-item/food-item.component';

import './food-preview.styles.scss';

// Food Preview function for previewing food in restaurant page
const FoodPreview = ({ title, items }) => (
    <div className='food-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {

                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <FoodItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
); // end of food function

export default FoodPreview;
