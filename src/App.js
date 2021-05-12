import Info from "./Info";
import Last from "./Last";
import Main from "./Main";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Top from "./Top";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Top />
        <Navbar />
        <Main />
        <Projects />
        <Info />
        <Skills />
      </div>
    </div>
  );
}

export default App;
