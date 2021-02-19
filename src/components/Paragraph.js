import React from 'react';

export default function Paragraph(props) {

    const { explanation } = props;

    return (
        <div className='photo-info'>
            <p>{explanation}</p>

        </div>
    );

};