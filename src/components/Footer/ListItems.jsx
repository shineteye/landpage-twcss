import React from 'react'

export default function ListItems({ link, linkText }) {
    return (<>
        <a className='hover:text-red-400' href={link}>{linkText}</a>
    </>

    )
}
