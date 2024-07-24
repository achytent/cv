type SkillsOutputProps = {
  skills: string[] | undefined;
};

const SkillsOutput = ({ skills }: SkillsOutputProps) => {
  return (
    <div className="education-wrapper">
      {skills && <h2 className="title">Skills</h2>}
      <div className="output">
        <div className="skills-container">
          {skills?.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsOutput;
