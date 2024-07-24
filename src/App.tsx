import { useState } from "react";
import InputFields from "./components/InputFields";
import OutputFields from "./components/OutputFields";
import "./styles/App.css";
import { IEducationInfo, IExperienceInfo, IPersonalInfo } from "./types";

function App() {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>();
  const [educationInfo, setEducationInfo] = useState<IEducationInfo[]>();
  const [experienceInfo, setExperienceInfo] = useState<IExperienceInfo[]>();
  const [skills, setSkills] = useState<string[]>();
  return (
    <>
      <InputFields
        setPersonalInfo={setPersonalInfo}
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        skills={skills}
        setSkills={setSkills}
      />
      <OutputFields
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        skills={skills}
      />
    </>
  );
}

export default App;
