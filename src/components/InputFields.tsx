import PersonalInput from "./PersonalInput";
import "../styles/input.css";
import EducationInput from "./EducationInput";
import { IEducationInfo, IExperienceInfo } from "../types";
import ExperienceInput from "./ExperienceInput";
import SkillsInput from "./SkillsInput";
import html2pdf from "html2pdf.js";

type InputFieldsProps = {
  setPersonalInfo: Function;
  educationInfo: IEducationInfo[] | undefined;
  setEducationInfo: Function;
  experienceInfo: IExperienceInfo[] | undefined;
  setExperienceInfo: Function;
  skills: string[] | undefined;
  setSkills: Function;
};

const InputFields = ({
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
  experienceInfo,
  setExperienceInfo,
  skills,
  setSkills,
}: InputFieldsProps) => {
  function exportToPDF() {
    const element = document.querySelector(".output-area");
    html2pdf().from(element).save();
  }

  return (
    <div className="input-area">
      <PersonalInput setPersonalInfo={setPersonalInfo} />
      <EducationInput
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
      />
      <ExperienceInput
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <SkillsInput skills={skills} setSkills={setSkills} />
      <button onClick={exportToPDF} className="export">
        Export to PDF
      </button>
    </div>
  );
};

export default InputFields;
