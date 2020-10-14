import React from 'react'

const CountChange = (numberChange, number) => {
    return (
        <div>
           <span>{`${number }"/"${ numberChange}`}</span> 
        </div>
    )
}

export default CountChange
