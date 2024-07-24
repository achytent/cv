import { IPersonalInfo } from "../types";

type PersonalInputProps = {
  setPersonalInfo: Function;
};

const PersonalInput = ({ setPersonalInfo }: PersonalInputProps) => {
  const handlePersonalInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (target.name == "image")
      setPersonalInfo((prevstate: IPersonalInfo) => {
        if (!target.files) return;
        return {
          ...prevstate,
          [target.name]: target.files[0],
        };
      });
    else
      setPersonalInfo((prevstate: IPersonalInfo) => ({
        ...prevstate,
        [target.name]: target.value,
      }));
  };

  return (
    <div className="input personal">
      <form className="input-form">
        <label htmlFor="position">
          Position
          <input
            type="text"
            name="position"
            id="position"
            onChange={handlePersonalInputChange}
          />
        </label>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handlePersonalInputChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handlePersonalInputChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            onChange={handlePersonalInputChange}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handlePersonalInputChange}
          />
        </label>
        <label htmlFor="image">
          <input
            type="file"
            name="image"
            id="image"
            onChange={handlePersonalInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default PersonalInput;
