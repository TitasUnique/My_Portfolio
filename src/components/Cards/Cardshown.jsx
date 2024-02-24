import React from 'react'
import './Cardshown.css';
const Cardshown = (props) => {
  const combinedStyle = {
    ...props.style01,
    ...props.width01,
  };
  return (
    <div className='cards-shown' data-aos="zoom-in">
      <img src={props.img} style={combinedStyle} alt="images" />
      <span>{props.name}</span>
      <span className='span-hover'>{props.projname}</span>
      <span>{props.detail}</span>
    </div>
  )
}

export default Cardshown