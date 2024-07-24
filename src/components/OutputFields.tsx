import { IEducationInfo, IExperienceInfo, IPersonalInfo } from "../types";
import PersonalOutput from "./PersonalOutput";
import "../styles/output.css";
import EducationOutput from "./EducationOutput";
import ExperienceOutput from "./ExperienceOutput";
import SkillsOutput from "./SkillsOutput";

type OutputFieldsProps = {
  personalInfo: IPersonalInfo | undefined;
  educationInfo: IEducationInfo[] | undefined;
  experienceInfo: IExperienceInfo[] | undefined;
  skills: string[] | undefined;
};

const OutputFields = ({
  personalInfo,
  educationInfo,
  experienceInfo,
  skills,
}: OutputFieldsProps) => {
  return (
    <div className="output-area">
      <h2 className="title">{personalInfo?.position}</h2>
      <PersonalOutput personalInfo={personalInfo} />
      <EducationOutput educationInfo={educationInfo} />
      <ExperienceOutput experienceInfo={experienceInfo} />
      <SkillsOutput skills={skills} />
    </div>
  );
};

export default OutputFields;
