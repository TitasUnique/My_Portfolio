import React from 'react'
import './NextBtn.css'
const NextBtn = ({handelRotation}) => {
    return (
        <>
            <button class="button" onClick={handelRotation} style={{transform : "translateX(20vw)"}}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <div class="front">
                    <span>Next</span>
                </div>
            </button>
        </>
    )
}

export default NextBtn