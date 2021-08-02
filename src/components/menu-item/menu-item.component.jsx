import React from 'react';

import '../menu-item/menu-item.styles.scss';

const MeuItem = ({ title, cta, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        <div className="content">
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{cta}</span>
        </div>
    </div>

);

export default MeuItem;
