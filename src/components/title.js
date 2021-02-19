import React from 'react';
import Info from './Info.js'

export default function Title(props) {

    const {newData} = props;

   // if (!props.photoOfTheDay) return <h3>Loading...</h3>;

    
    return (
        <div className='this-is-title'>
            <Info 
            title={newData.title}
            date={newData.date}
            />
        </div>
    )
}