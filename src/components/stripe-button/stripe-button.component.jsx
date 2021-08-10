import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JMZ4pIHKCBR5RbpobGi4gAXT1CVFf2EDUENPSShntF6kP2xXOdbZeBIbSnFvWcHtXfcrOQOZqNZzEfFi8FYDooP00jlsGRwPm';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='The Jagger Lounge'
            image='https://svgshare.com/i/_4_.svg'
            description={  `Your total is R${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;