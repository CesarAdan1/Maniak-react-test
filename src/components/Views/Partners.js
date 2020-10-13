import React from 'react'
import { LeftSquareComponent, RightSquareComponent, Container } from '../containers';
import './home.css';

const Partners = () => {
    return (
        <Container>
            <div className="home__content_right">
                <LeftSquareComponent>
                    help me!!
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

export default Partners
