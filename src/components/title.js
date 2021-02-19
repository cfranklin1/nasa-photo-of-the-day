import React from 'react';
import Info from './Info.js'

export default function Title(props) {

    const {newData} = props;

   // if (!props.photoOfTheDay) return <h3>Loading...</h3>;

    
    return (
        <div className='this-is-title'>
            <Info
            date={newData.date}
            title={newData.title}
            
            />
        </div>
    )
}