import Ff1 from "./Project_data/FireFighting/FF1.jpg";
import Ff2 from "./Project_data/FireFighting/FF2.jpg";
import Ff3 from "./Project_data/FireFighting/FF3.jpg";
import Ff4 from "./Project_data/FireFighting/FF4.jpg";
import Ff5 from "./Project_data/FireFighting/FF5.jpg";
import Ff6 from "./Project_data/FireFighting/FF6.jpg";
import Ff7 from "./Project_data/FireFighting/FF7.jpg";
import FfPdf from "./Project_data/FireFighting/Fire_fighting.pdf";

import Wg1 from "./Project_data/WaterGarbage/WG1.png";
import Wg2 from "./Project_data/WaterGarbage/WG2.png";
import Wg3 from "./Project_data/WaterGarbage/WG3.png";
import WgPdf from "./Project_data/WaterGarbage/Water_Cleaning_Robot.pdf";

import GL1 from "./Project_data/GasLeakage/GD1.jpg";
import GL2 from "./Project_data/GasLeakage/GD2.jpeg";
import GLpdf from "./Project_data/GasLeakage/Gas_Leakage.pdf";

import MpPdf from "./Project_data/MathProj/Mathematics_Proj.pdf";

import SrPdf from "./Project_data/SmartRoad/Smart_Road.pdf";

import WpPdf from "./Project_data/WaterPurity/Water_Quality_Parameters.pdf";

import cardImg1 from "./Project_data/CardImages/Arduino.png";
import cardImg2 from "./Project_data/CardImages/circuit1.png";
import cardImg3 from "./Project_data/CardImages/math.png";
import cardImg4 from "./Project_data/CardImages/circuit2.png";
import cardImg5 from"./Project_data/CardImages/machine.png";

const PrDetails = {
  project: [
    {
      name: "Fire Fighting Robot",
      image: [Ff1, Ff2, Ff3, Ff4, Ff5, Ff6, Ff7],
      PdfLink: FfPdf,
      paperLink: "https://www.ijaresm.com/fire-fighting-operation-management-through-automated-self-protecting-robot",
      cardImage: cardImg1
    },
    {
      name: "Water Garbage Cleaner",
      image: [Wg1, Wg2, Wg3],
      PdfLink: WgPdf,
      paperLink: "https://www.eduzonejournal.com/index.php/eiprmj/article/view/43",
      cardImage: cardImg2
    },
    {
      name: "Gas Leakage Detection",
      image: [GL1, GL2],
      PdfLink: GLpdf,
      paperLink: "https://www.ijaresm.com/an-alarming-and-protection-scheme-to-avoid-accident-due-to-leakage-of-gas",
      cardImage: cardImg5
    },
    {
      name: "Mathematics Project",
      image: "",
      PdfLink: MpPdf,
      paperLink: "",
      cardImage: cardImg3
    },
    {
      name: "Smart Road",
      image: "",
      PdfLink: SrPdf,
      paperLink: "",
      cardImage: cardImg4
    },
    {
      name: "Water Purity Checker",
      image: "",
      PdfLink: WpPdf,
      paperLink: "",
      cardImage: cardImg2
    },
  ],
};

export default PrDetails;
