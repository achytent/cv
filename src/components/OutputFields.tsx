import { IEducationInfo, IPersonalInfo } from "../types";
import PersonalOutput from "./PersonalOutput";
import "../styles/output.css";
import EducationOutput from "./EducationOutput";

type OutputFieldsProps = {
  personalInfo: IPersonalInfo | undefined;
  educationInfo: IEducationInfo[] | undefined;
};

const OutputFields = ({ personalInfo, educationInfo }: OutputFieldsProps) => {
  return (
    <div className="output-area">
      <h2 className="title">{personalInfo?.position}</h2>
      <PersonalOutput personalInfo={personalInfo} />
      <EducationOutput educationInfo={educationInfo} />
    </div>
  );
};

export default OutputFields;
