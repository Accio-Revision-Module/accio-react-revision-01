import "./App.css";
import ClassBased from "./components/ClassBased";
import Func from "./components/Func";

function App() {
  return (
    <>
      <div className="main">Hello World</div>
      <Func name={"jayesh"} />
      <ClassBased name={"aman"} />
    </>
  );
}

export default App;
