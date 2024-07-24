export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: File;
  position: string;
  about: string;
}

export interface IEducationInfo {
  id: number;
  schoolName: string;
  title: string;
  started: string;
  ended: string;
}

export interface IExperienceInfo {
  id: number;
  company: string;
  companyPosition: string;
  started: string;
  ended: string;
  goals: string;
}
