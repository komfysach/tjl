import React from 'react';

import Button from '@material-ui/core/Button';


import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <Button className='btn' variant="outlined" color="primary" type="button">GO TO CHECK OUT</Button>
        </div>
    </div>
)

export default CartDropdown;