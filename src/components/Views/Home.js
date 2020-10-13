import React, { useState } from 'react'
import { LeftSquareComponent, RightSquareComponent, Container } from '../containers';
import { Range } from 'react-range';
import './home.css';


const Home = () => {
    const [values, setValue] = useState([50]);
    const [fullEmployees, setFullEmployees] = useState(8);
    return (
        <Container>
            <div className="home__content_right">
                <LeftSquareComponent>
                    <span className="home__rectangle">
                        <span className="home__rectangle_text_first">Save More with</span>
                        <span className="home__rectangle_text_second">Bellotero.io</span>
                    </span>
                    <span className="home__rectangle_text">
                        <p>
                            With Bellotero.io you save time and money make
                            real-time decisions that boost your business and
                            your bottom line. Get less wrongfully blocked
                            payments, save time on bookkeeping and no
                            need to worry about safety.
                        </p>
                    </span>
                </LeftSquareComponent>
            </div>
            <div className="home__content_left">
                <RightSquareComponent>
                    <div className="home__content_left_info">
                        <section className="home__content_left_first">
                            <div className="home__content_left_first_sect">
                                <div>
                                    <div>
                                        <h3>Monthly</h3>
                                        <h3>Ingredient spending</h3>
                                    </div>
                                    <div>
                                        <div>$</div>
                                        <span>{fullEmployees}</span>
                                    </div>
                                </div>

                                <Range
                                    step={0.1}
                                    min={0}
                                    max={100}
                                    values={values}
                                    onChange={(values) => setValue({ values })}
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

                            </div>
                            <div>
                                <input
                                    type="number"

                                />
                            </div>
                        </section>
                        <section className="home__content_left_second">
                            <div className="home__content_left_second_sect">
                            <div>
                                <div style={{display: 'flex', flexDirection: 'row !important'}}>
                                    <div>
                                        <h3>Monthly</h3>
                                        <h3>Ingredient spending</h3>
                                    </div>
                                    <div>
                                        <div></div>
                                        <span>{fullEmployees}</span>
                                    </div>
                                </div>
                                <Range
                                    step={0.1}
                                    min={0}
                                    max={100}
                                    values={values}
                                    onChange={(values) => setValue({ values })}
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
                            </div>
                            <div>
                                <input
                                    type="number"
                                />
                            </div>
                            </div>
                        </section>
                    <section className="home__content_left_third">
                        <span className="home__content_left_third_1">
                            <i>$</i><span className="home__content_left_third_price">8.611</span>
                            <p>Estimated cost food savings</p>
                        </span>
                        <span className="home__content_left_third_1">
                            <i>$</i><span className="home__content_left_third_price">36.211</span>
                            <p>Your estimated annual savings</p>
                        </span>
                    </section>
                    </div>

                </RightSquareComponent>
            </div>
        </Container>

    )
}

export default Home;
