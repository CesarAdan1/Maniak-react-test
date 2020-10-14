import React from 'react'
import { BottomContainer, TopContainer, Container } from '../containers';
import { RightArrow, LeftArrow, TextBlue, TextChange, CountChange, CommentChangeable } from './ViewComponents';
import './home.css';

import styled from 'styled-components'

const ComponentStyles = styled.div `

`;

const Solutions = () => {
    return (
        <ComponentStyles>
            <Container>
            <div className="home__content_right">
                <TopContainer 
                    leftContent={<TextBlue />}
                />
            </div> 
            <div className="home__content_left">
                <BottomContainer 
                    leftSide={<TextChange />}
                    rightSide={<CommentChangeable />}
                    changeIndicatorSideNumber={
                        <div>
                          <CountChange />
                          <span>
                              <LeftArrow />
                              <RightArrow />
                          </span>  
                        </div>
                        
                        
                        }
                />
            </div>
        </Container> 
        </ComponentStyles>
       
    )
}

export default Solutions
