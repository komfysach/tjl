import React from 'react'
import { Route } from 'react-router-dom';

import '../../components/preview-food/food-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const RestaurantPage = ({ match }) => {
    return (
        <div className='restaurant-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};


export default RestaurantPage;