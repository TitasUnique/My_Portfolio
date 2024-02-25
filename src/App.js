import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Highlights from "./components/Highlights/Highlights";
import Terminal from "./components/Terminal/Terminal";
// import DemoTesting from "./components/demoTesting/DemoTesting";
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Cards/>
      <Highlights/>
      <Terminal/>
      {/* <DemoTesting/> */}
    </div>
  );
}

export default App;
