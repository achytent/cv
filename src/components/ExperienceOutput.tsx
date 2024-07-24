import { IExperienceInfo } from "../types";

type ExperiencsOutputProps = {
  experienceInfo: IExperienceInfo[] | undefined;
};

const ExperienceOutput = ({ experienceInfo }: ExperiencsOutputProps) => {
  return (
    <div className="education-wrapper">
      {experienceInfo && <h2 className="title">Experience</h2>}
      {experienceInfo?.map((experience) => {
        return (
          <div className="output education">
            <div className="dates">
              From {experience.started} to {experience.ended}
            </div>
            <div className="description">
              <p>{experience.company}</p>
              <p className="subitem">{experience.companyPosition}</p>
              <p>{experience.goals}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceOutput;
