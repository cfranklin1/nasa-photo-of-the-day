import React from 'react';

export default function Title(props) {

    const {newData} = props;

    if (!props.photoOfTheDay) return <h3>Loading...</h3>;

    
    return (
        <div className='this-is-title'>
            <h1>{newData.title}</h1>
        </div>
    )
}