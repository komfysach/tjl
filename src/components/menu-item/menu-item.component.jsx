import React from 'react';
import { withRouter } from 'react-router-dom';

import '../menu-item/menu-item.styles.scss';

// Menu item for homepage directory
const MeuItem = ({ title, cta, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{cta}</span>
        </div>

    </div>

); // end of MenuItem function

export default withRouter(MeuItem);
