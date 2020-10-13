import React from 'react'
import { LeftSquareComponent, RightSquareComponent, Container } from '../containers';
import './home.css';

const Solutions = () => {
    return (
        <Container>
            <div className="home__content_right">
                <LeftSquareComponent>
                    help!!
                </LeftSquareComponent>
            </div> 
            <div className="home__content_left">
                <RightSquareComponent>
                    In my Life
                </RightSquareComponent>
            </div>
        </Container>
    )
}

export default Solutions
