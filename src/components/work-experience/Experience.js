const Experience = (props) => {
  return(
    <div key={props.idx}>
      <div className="header">
        <img src={`/${props.experience.logo}`} alt="Company Logo" />
        &nbsp;
        <h4>
          {props.experience.company} - {props.experience.product}
        </h4>
      </div>
      <ul>
        {props.experience.bullets.map((bullet) => {
          return <li>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}

export default Experience;