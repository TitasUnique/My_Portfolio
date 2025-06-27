import React from 'react'
import './NextBtn.css'
const NextBtn = ({handelRotation}) => {
    return (
        <>
            <button className="button" onClick={handelRotation} style={{transform : "translateX(20vw)"}}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <div className="front">
                    <span>Next</span>
                </div>
            </button>
        </>
    )
}

export default NextBtn