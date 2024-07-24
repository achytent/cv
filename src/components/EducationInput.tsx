import { IEducationInfo } from "../types";

type EducationInputProps = {
  educationInfo: IEducationInfo[] | undefined;
  setEducationInfo: Function;
};

const EducationInput = ({
  educationInfo,
  setEducationInfo,
}: EducationInputProps) => {
  const handleEducationInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (!educationInfo) return;
    const newEducation = [...educationInfo];
    const element = newEducation.find(
      (element) => String(element.id) == target.dataset.id
    );
    if (!element) return;
    const index = educationInfo.indexOf(element);
    setEducationInfo((prevstate: IEducationInfo[]) => {
      return prevstate.map((item: IEducationInfo) =>
        item.id == index ? { ...item, [target.name]: target.value } : item
      );
    });
  };
  const handleNewEducation = () => {
    setEducationInfo((prevstate: IEducationInfo[]) =>
      prevstate
        ? [
            ...prevstate,
            {
              id: prevstate.length,
              schoolName: "",
              title: "",
              started: "",
              ended: "",
            },
          ]
        : [
            {
              id: 0,
              schoolName: "",
              title: "",
              started: "",
              ended: "",
            },
          ]
    );
  };
  return (
    <div className="input personal">
      <h2 className="subtitle">Education</h2>
      {educationInfo?.map((element) => (
        <form className="input-form">
          <label htmlFor="position">
            School Name
            <input
              type="text"
              name="schoolName"
              data-id={element.id}
              onChange={handleEducationInputChange}
            />
          </label>
          <label htmlFor="firstName">
            Title
            <input
              type="text"
              name="title"
              data-id={element.id}
              onChange={handleEducationInputChange}
            />
          </label>
          <label htmlFor="lastName">
            Started
            <input
              type="date"
              name="started"
              data-id={element.id}
              onChange={handleEducationInputChange}
            />
          </label>
          <label htmlFor="email">
            Ended
            <input
              type="date"
              name="ended"
              data-id={element.id}
              onChange={handleEducationInputChange}
            />
          </label>
        </form>
      ))}
      <button onClick={handleNewEducation} className="add-education">
        Add Education
      </button>
    </div>
  );
};

export default EducationInput;
