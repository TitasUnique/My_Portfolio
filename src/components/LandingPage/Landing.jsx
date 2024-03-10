import React,{useEffect} from 'react'
import Home from "../../components/Home/Home";
import Cards from "../../components/Cards/Cards";
import Highlights from "../../components/Highlights/Highlights";
import Terminal from "../../components/Terminal/Terminal";
const Landing = ({navold,setnav}) => {
    useEffect(() => {
        if (navold === "10th 12th standard") {
          setnav("landing-page")
          console.log("landing")
        }
      }, [navold,setnav])
    return (
        <>
            <Home />
            <Cards />
            <Highlights />
            <Terminal />
        </>
    )
}

export default Landing