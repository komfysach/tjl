import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectRestaurant = state => state.restaurant;

export const selectCollections = createSelector(
    [selectRestaurant],
    restaurant => restaurant.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)
);