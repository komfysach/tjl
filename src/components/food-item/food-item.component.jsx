import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './food-item.styles.scss';

const FoodItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
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
            <Button onClick={() => addItem(item)} className='btn' variant="outlined" color="primary" type="button">Add</Button>
        </div>

    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(FoodItem);
