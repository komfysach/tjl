import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component';

import '../directory/directory.styles.scss';

// Directory class for homepage to direct customer to various pages.
class Directory extends Component {
    constructor() {
        super();
        this.state = {
            // database for directory sections
            sections: [
                {
                    title: 'Drinks',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/cocktails.jpg?alt=media&token=edaf9fcd-63ae-4075-96ff-7e0573bcfd45',
                    id: 1,
                    cta: 'ORDER NOW',
                    linkUrl: 'shop/drinks'
                },
                {
                    title: 'Bookings',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/bookings.JPG?alt=media&token=9287ac49-3ca4-4068-b3eb-2694d31745d5',
                    id: 2,
                    cta: 'BOOK NOW',
                    linkUrl: 'shop/bookings'
                },
                {
                    title: 'Entertainment',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/entertainment.JPG?alt=media&token=3b126da4-2aec-4325-b033-565972b4dab5',
                    id: 3,
                    cta: 'LINE-UP',
                    linkUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/entertainment.JPG?alt=media&token=3b126da4-2aec-4325-b033-565972b4dab5'
                },
                {
                    title: 'Food',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/beef-burger.jpg?alt=media&token=8b010cde-778e-4905-8076-06462b31f911',
                    size: 'large',
                    id: 4,
                    cta: 'ORDER NOW',
                    linkUrl: 'shop/food'
                }
            ]
        };
    }
    // render method for directory menu items
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, cta, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} cta={cta} size={size} />
                    ))
                }
            </div>
        );
    }
} // end of directory class

export default Directory;