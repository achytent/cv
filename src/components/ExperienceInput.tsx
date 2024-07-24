import { IExperienceInfo } from "../types";

type ExperienceInputProps = {
  experienceInfo: IExperienceInfo[] | undefined;
  setExperienceInfo: Function;
};

const ExperinceInput = ({
  experienceInfo,
  setExperienceInfo,
}: ExperienceInputProps) => {
  const handleExperienceInfoChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (!experienceInfo) return;
    const newExperience = [...experienceInfo];
    const element = newExperience.find(
      (element) => String(element.id) == target.dataset.id
    );
    if (!element) return;
    const index = experienceInfo.indexOf(element);
    setExperienceInfo((prevstate: IExperienceInfo[]) => {
      return prevstate.map((item: IExperienceInfo) =>
        item.id == index ? { ...item, [target.name]: target.value } : item
      );
    });
  };
  const handleNewExperience = () => {
    setExperienceInfo((prevstate: IExperienceInfo[]) =>
      prevstate
        ? [
            ...prevstate,
            {
              id: prevstate.length,
              company: "",
              companyPosition: "",
              started: "",
              ended: "",
              goals: "",
            },
          ]
        : [
            {
              id: 0,
              company: "",
              companyPosition: "",
              started: "",
              ended: "",
              goals: "",
            },
          ]
    );
  };
  return (
    <div className="input personal">
      <h2 className="subtitle">Experience</h2>
      {experienceInfo?.map((element) => (
        <form className="input-form">
          <label htmlFor="position">
            Company
            <input
              type="text"
              name="company"
              data-id={element.id}
              onChange={handleExperienceInfoChange}
            />
          </label>
          <label htmlFor="firstName">
            Position
            <input
              type="text"
              name="companyPosition"
              data-id={element.id}
              onChange={handleExperienceInfoChange}
            />
          </label>
          <label htmlFor="lastName">
            Started
            <input
              type="date"
              name="started"
              data-id={element.id}
              onChange={handleExperienceInfoChange}
            />
          </label>
          <label htmlFor="email">
            Ended
            <input
              type="date"
              name="ended"
              data-id={element.id}
              onChange={handleExperienceInfoChange}
            />
          </label>
          <label htmlFor="email">
            Goals
            <input
              type="text"
              name="goals"
              data-id={element.id}
              onChange={handleExperienceInfoChange}
            />
          </label>
        </form>
      ))}
      <button onClick={handleNewExperience} className="add-education">
        Add Experience
      </button>
    </div>
  );
};

export default ExperinceInput;
