import "./App.css";
import Title from "./components/Title";
import Education from "./components/Education";
import WorkExperiences from "./components/work-experience/WorkExperiences";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Title />
      <Education />
      <Skills />
      <WorkExperiences />
    </div>
  );
}

export default App;
