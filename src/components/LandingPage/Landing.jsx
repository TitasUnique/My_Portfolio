import React from 'react'
import Home from "../../components/Home/Home";
import Cards from "../../components/Cards/Cards";
import Highlights from "../../components/Highlights/Highlights";
import Terminal from "../../components/Terminal/Terminal";
import Navbar from "../../components/Navbar/Navbar";
const Landing = () => {
  return (
    <>
      <Navbar navold={"black"}/>
      <Home />
      <Cards />
      <Highlights />
      <Terminal />
    </>
  )
}

export default Landing