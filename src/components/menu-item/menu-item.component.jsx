import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl}) => (

    <div 
    className='menu-item'
    style={{ backgroundImage: `url(${imageUrl})`}}
    >
        <div className='title'>
            <h1>{title}</h1>
            <span className='subtitle'>
                SHOP NOW
                    </span>
        </div>
    </div>
)

export default MenuItem