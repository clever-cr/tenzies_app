import React from 'react'

const Die = ({ value }) => {
    return (
        <div>
            <button className='bg-white p-6 rounded-md shadow-xl'>{value}</button>
        </div>
    )
}

export default Die