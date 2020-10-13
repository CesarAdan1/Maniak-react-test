import React from 'react'
import PropTypes from 'prop-types'

const LeftSquareComponent = props => {
    return (
        <div className="home__left_square">
            {props.children}
        </div>
    )
}

LeftSquareComponent.propTypes = {

}

export default LeftSquareComponent
