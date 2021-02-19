import React from 'react';

export default function Info(props) {

    const { title, date } = props;

    return (
        <div className='title-info'>
            <div className='title-text'>
                <h2>{title}</h2>
            </div>
            <div className=''>
                <h3>{date}</h3>
            </div>

        </div>
    );

};