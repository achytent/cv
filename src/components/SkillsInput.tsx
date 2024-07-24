type SkillsInputProps = {
  skills: string[] | undefined;
  setSkills: Function;
};

const SkillsInput = ({ skills, setSkills }: SkillsInputProps) => {
  const handleNewSkill = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target["skill"] as HTMLInputElement;
    const value = target.value;
    if (!skills) {
      setSkills(() => [value]);
    } else setSkills((prevState: string[]) => [...prevState, value]);
    target.value = "";
  };
  const removeSkill = (skill: string) => {
    if (!skills) return;
    const newSkills = [...skills];
    newSkills.splice(skills.indexOf(skill), 1);
    setSkills(() => newSkills);
  };
  return (
    <div className="input personal">
      <h2 className="subtitle">Skills</h2>
      <form onSubmit={handleNewSkill}>
        <input type="text" className="skillsInput" name="skill" />
      </form>
      <div className="skills-container">
        {skills?.map((skill) => (
          <div className="skill" onClick={() => removeSkill(skill)}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsInput;
