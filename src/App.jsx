import "./App.css";
import Spline from "@splinetool/react-spline";
import Navbar from "./navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="wrapper">
        <div className="loader"></div>
        <Spline
          className="canvas"
          scene="https://prod.spline.design/TS0nu9zhoZtfa9Po/scene.splinecode"
        />
      </div>
    </>
  );
}

export default App;
