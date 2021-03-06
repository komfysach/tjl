import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />
                    ))
                    )
                    :
                    (<span className='empty-message'>Add some items</span>)
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }} className='btn' variant="outlined" color="primary" type="button">GO TO CHECK OUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));