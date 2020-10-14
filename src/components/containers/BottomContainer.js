import React from 'react'

const BottomContainer = (props) => {
    return (
        <div>
            <div>
                <div>
                    {props.leftSide}
                </div>
                <div>
                    {props.rightSide}
                </div>
            </div>
            <div>
                {props.changeIndicatorSideNumber}
            </div>
        </div>
    )
}

export default BottomContainer
