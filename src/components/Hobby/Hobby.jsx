import React from 'react'
import "./Hobby.css";
import Navbar from "../../components/Navbar/Navbar";
import Copyright  from "../CopyRight/CopyRight";

const Hobby = () => {
    return (
        <>
            <Navbar navold={"black"} />
            <div className="masonry-container">
                <div className="grid-item light-green"></div>
                <div className="grid-item red"></div>
                <div className="grid-item red"></div>
                <div className="grid-item blue"></div>
                <div className="grid-item red"></div>
                <div className="grid-item red"></div>
                <div className="grid-item pink"></div>
                <div className="grid-item purple"></div>
                <div className="grid-item light-yellow"></div>
                <div className="grid-item dark-green"></div>
                <div className="grid-item violet"></div>
                <div className="grid-item light-yellow"></div>
                <div className="grid-item dark-yellow2"></div>
                <div className="grid-item violet"></div>
                <div className="grid-item grey"></div>
                <div className="grid-item dark-yellow1"></div>
                <div className="grid-item green"></div>
            </div>
            <Copyright/>
        </>
    )
}

export default Hobby