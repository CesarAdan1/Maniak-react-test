import React, { useState } from 'react'
import { Container } from '../containers';
import './home.css';

import { Range } from 'react-range';
import { LeftSideHome, RightSideHome } from './ViewComponents';

const Home = () => {
    const [values, setValue] = useState([50]);
    const [fullEmployees, setFullEmployees] = useState(8);

    return (
        <Container>
            <div className="home__content_right">
                <LeftSideHome

                />
            </div>
            <div className="home__content_left">
                <RightSideHome
                    rangeMonthlyIngredient={
                        <Range
                            step={0.1}
                            min={0}
                            max={100}
                            values={values}
                            onChange={() => setValue()}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: '6px',
                                        width: '535px',
                                        backgroundColor: '#ccc'
                                    }}
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: '16px',
                                        width: '16px',
                                        boxShadow: "0 2px 8px 0 rgba(7, 30, 179, 0.24)",
                                        border: 'solid 5px var(--blue)',
                                        backgroundColor: '#ffff'
                                    }}
                                />
                            )}
                        />
                    }
                    rangeFullTimeEmployees={
                        <Range
                                step={0.1}
                                min={0}
                                max={100}
                                values={values}
                                onChange={() => setValue()}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '6px',
                                            width: '535px',
                                            backgroundColor: '#ccc'
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '16px',
                                            width: '16px',
                                            boxShadow: "0 2px 8px 0 rgba(7, 30, 179, 0.24)",
                                            border: 'solid 5px var(--blue)',
                                            backgroundColor: '#ffff'
                                        }}
                                    />
                                )}
                            />
                    }
                />
            </div>
        </Container>
    )
}

export default Home;
