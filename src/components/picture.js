import React from 'react';


export default function Picture(props) {

    const {newData} = props;

    return (
        <div className='this-is-picture'>
            <img alt='to-day' className='day-picture' src={newData.url} />
        </div>
    )
}