import React from "react";
import './WorkDemo.css';
import 'animate.css';
import Navbar from "../../components/Navbar/Navbar";
import DwnldBtn from "../DownloadBtn/DownloadBtn";
import Copyright  from "../CopyRight/CopyRight";
import Json from "../../LearningPdfs/JSON.pdf";
const Workdemo = () => {

  return (
    <>
      <Navbar navold={"black"} />
      <div className="work-content">
      <h1 className="upcoming-title">LEARN WITH ME</h1>
        <div className="work-title-span json-title">
          <span>J</span>
          <span>S</span>
          <span>O</span>
          <span>N</span>
        </div>
        <DwnldBtn PdfLink={Json} FileName={"Learn_JSON_With_Titas"} BtnName={"JSON"}/>
        <br />
        <br />
        <h1 className="upcoming-title">UPCOMING</h1>
        <div className="work-title-span js-title">
          <span>J</span>
          <span>A</span>
          <span>V</span>
          <span>A</span>
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>I</span>
          <span>P</span>
          <span>T</span>
        </div>
        <DwnldBtn  FileName={"Learn_JS_With_Titas"} BtnName={"JavaScript"}/>
        <br />
        <div className="work-title-span react-title">
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>.</span>
          <span>J</span>
          <span>S</span>
        </div>
        <DwnldBtn  FileName={"Learn_React_With_Titas"} BtnName={"React"}/>
        <br />
        <div className="work-title-span redux-title">
          <span>R</span>
          <span>E</span>
          <span>D</span>
          <span>U</span>
          <span>X</span>
        </div>
        <DwnldBtn  FileName={"Learn_Redux_With_Titas"} BtnName={"Redux"}/>
      </div>
      <Copyright/>
    </>
  );
}

export default Workdemo;

