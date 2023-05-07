import React from 'react'

export default function ImgLinks({ imgSource, imgAlt, linkTo }) {
    return (
        <>
            <a href={linkTo}>
                <img src={imgSource} alt={imgAlt} className='h-8' />
            </a>
        </>
    )
}
