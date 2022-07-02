import Experience from "./Experience";
import WorkExp from "./work-exp.json";
import "./WorkExperiences.css";
const WorkExperience = () => {
  return (
    <div>
      <h3>Work Experience</h3>
      <div>
        {WorkExp.map((experience, idx) => {
          return (
            <Experience
              experience={experience}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
