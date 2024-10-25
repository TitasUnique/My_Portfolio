import React from "react";
// import './Personalproj.css';
import 'animate.css'
import Project from "../../components/Projects/Projects"

const Images = [
  "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Personalproj = () => {

  return (
    <>
      <Project text={"PERSONAL"} images={Images}/>
    </>
  );
}

export default Personalproj;


