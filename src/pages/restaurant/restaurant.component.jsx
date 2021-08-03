import React from 'react'

import RESTAURANT_DATA from './restaurant.data.js';

import '../../components/preview-food/food-preview.component';
import FoodPreview from '../../components/preview-food/food-preview.component';

// Declares Restaurant page class
class RestuarantPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: RESTAURANT_DATA
        };
    }
    // renders restaurant page
    render() {
        const { collections } = this.state;
        return (<div className='restaurant-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <FoodPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}// end of Restaurant page class

export default RestuarantPage;