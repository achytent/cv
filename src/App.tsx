import { useState } from "react";
import InputFields from "./components/InputFields";
import OutputFields from "./components/OutputFields";
import "./styles/App.css";
import { IEducationInfo, IPersonalInfo } from "./types";

function App() {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>();
  const [educationInfo, setEducationInfo] = useState<IEducationInfo[]>();
  return (
    <>
      <InputFields
        setPersonalInfo={setPersonalInfo}
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
      />
      <OutputFields personalInfo={personalInfo} educationInfo={educationInfo} />
    </>
  );
}

export default App;
