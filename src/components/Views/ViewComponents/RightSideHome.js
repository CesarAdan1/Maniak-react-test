import React from 'react';
import { RightSquareComponent } from '../../containers';


const RightSideHome = ({ rangeMonthlyIngredient, rangeFullTimeEmployees, fullTimeEmployees, fullEmployees, estimatedCostFoodSvings, yourEstimatedAnnualSavings }) => {
    return (
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
                        {rangeMonthlyIngredient}
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
                            <div style={{ display: 'flex', flexDirection: 'row !important' }}>
                                <div>
                                    <h3>Monthly</h3>
                                    <h3>Ingredient spending</h3>
                                </div>
                                <div>
                                    <div></div>
                                    <span>{fullTimeEmployees}</span>
                                </div>
                            </div>
                            {rangeFullTimeEmployees}
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
                        <i>$</i><span className="home__content_left_third_price">{estimatedCostFoodSvings}</span>
                        <p>Estimated cost food savings</p>
                    </span>
                    <span className="home__content_left_third_1">
                        <i>$</i><span className="home__content_left_third_price">{yourEstimatedAnnualSavings}</span>
                        <p>Your estimated annual savings</p>
                    </span>
                </section>
            </div>
        </RightSquareComponent>
    )
}

export default RightSideHome;