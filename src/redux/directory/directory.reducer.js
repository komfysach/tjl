const INITIAL_STATE = {
    sections: [
        {
            title: 'Bookings',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/bookings.JPG?alt=media&token=9287ac49-3ca4-4068-b3eb-2694d31745d5',
            size: 'small',
            id: 1,
            cta: 'BOOK NOW',
            linkUrl: 'bookings'
        },
        {
            title: 'Entertainment',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/entertainment.JPG?alt=media&token=3b126da4-2aec-4325-b033-565972b4dab5',
            size: 'small',
            id: 2,
            cta: 'LINE-UP',
            linkUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/entertainment.JPG?alt=media&token=3b126da4-2aec-4325-b033-565972b4dab5'
        },
        {
            title: 'Drinks',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/cocktails.jpg?alt=media&token=edaf9fcd-63ae-4075-96ff-7e0573bcfd45',
            size: 'small',
            id: 3,
            cta: 'ORDER NOW',
            linkUrl: 'restaurant/drinks'
        },
        {
            title: 'Food',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/beef-burger.jpg?alt=media&token=8b010cde-778e-4905-8076-06462b31f911',
            size: 'large',
            id: 4,
            cta: 'ORDER NOW',
            linkUrl: 'restaurant/food'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;