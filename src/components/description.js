import React from 'react';
import Paragraph from './Paragraph.js'

export default function Description(props) {

    const {newData} = props;

    return (
        <div className='this-is-description'>
            <Paragraph newData={newData} explanation={newData.explanation} />
        </div>
    )
}