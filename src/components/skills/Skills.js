import skills from "./skills.json";
const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => {
          return <li key={idx}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
