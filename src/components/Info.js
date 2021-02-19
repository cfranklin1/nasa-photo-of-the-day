import React from 'react';

export default function Info(props) {

    const { title, date } = props;

    return (
        <div className='title-info'>
            <div className='title-text'>
                <h2>{date}</h2>
            </div>
            <div className=''>
                <h1>{title}</h1>
            </div>

        </div>
    );

};