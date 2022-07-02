import "./App.css";
import Title from "./components/Title";
import Education from "./components/Education";
import WorkExperiences from "./components/work-experience/WorkExperiences";

function App() {
  return (
    <div className="App">
      <Title />
      <Education />
      <WorkExperiences />
    </div>
  );
}

export default App;
