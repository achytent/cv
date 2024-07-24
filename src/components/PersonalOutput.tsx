import { IPersonalInfo } from "../types";

type PersonalOutputProps = {
  personalInfo: IPersonalInfo | undefined;
};

const PersonalOutput = ({ personalInfo }: PersonalOutputProps) => {
  console.log(personalInfo?.image);
  return (
    <div className="output personal">
      <img
        src={personalInfo?.image && URL.createObjectURL(personalInfo?.image)}
      />
      <div className="info">
        <p>
          {personalInfo?.firstName} {personalInfo?.lastName}
        </p>
        <p className="subitem">{personalInfo?.email}</p>
        <p className="subitem">{personalInfo?.phone}</p>
        <p>{personalInfo?.about}</p>
      </div>
    </div>
  );
};

export default PersonalOutput;
