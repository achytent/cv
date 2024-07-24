import PersonalInput from "./PersonalInput";
import "../styles/input.css";
import EducationInput from "./EducationInput";
import { IEducationInfo } from "../types";

type InputFieldsProps = {
  setPersonalInfo: Function;
  educationInfo: IEducationInfo[] | undefined;
  setEducationInfo: Function;
};

const InputFields = ({
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
}: InputFieldsProps) => {
  return (
    <div className="input-area">
      <PersonalInput setPersonalInfo={setPersonalInfo} />
      <EducationInput
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
      />
    </div>
  );
};

export default InputFields;
