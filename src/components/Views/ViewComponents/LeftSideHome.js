import React from 'react';
import { LeftSquareComponent } from '../../containers';

const LeftSideHome = ({ highlight, paragraph }) => {
    return (
        <LeftSquareComponent>
            <span className="home__rectangle">
                <span className="home__rectangle_text_first">{highlight}</span>
            </span>
            <span className="home__rectangle_text">
                <p>{paragraph}</p>
            </span>
        </LeftSquareComponent>
    )
}

export default LeftSideHome;