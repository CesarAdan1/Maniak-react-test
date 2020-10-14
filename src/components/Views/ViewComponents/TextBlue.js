import React from 'react';

const TextBlue = ({title}) => {
    const titled = title
    return (
        <span className="home__rectangle">
            <span className="home__rectangle_text_first">{titled}</span>
        </span>
    )
}

export default TextBlue;