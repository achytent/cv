import { IEducationInfo } from "../types";

type EducationOutputProps = {
  educationInfo: IEducationInfo[] | undefined;
};

const EducationOutput = ({ educationInfo }: EducationOutputProps) => {
  return (
    <div className="education-wrapper">
      {educationInfo && <h2 className="title">Education</h2>}
      {educationInfo?.map((education) => {
        return (
          <div className="output education">
            <div className="dates">
              From {education.started} to {education.ended}
            </div>
            <div className="description">
              <p>{education.schoolName}</p>
              <p className="subitem">{education.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationOutput;
