import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <Button className='btn' variant="outlined" color="primary" type="button">GO TO CHECK OUT</Button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);