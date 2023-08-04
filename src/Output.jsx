export default function Output(props) {
    const personalInfo = props.personalInfo;
    const education = props.education;
    const practicalExperience = props.practicalExperience;
    return (
        <div>
            <div className='personal-info'>
                <div>{personalInfo.firstName}</div>
                <div>{personalInfo.lastName}</div>
                <div>{personalInfo.email}</div>
                <div>{personalInfo.phone}</div>
            </div>
            <div className="education">
                <div>{education.schoolName}</div>
                <div>{education.studyTitle}</div>
                <div>{education.studyDate}</div>
            </div>
            <div className="practical-experience">
                <div>{practicalExperience.companyName}</div>
                <div>{practicalExperience.position}</div>
                <div>{practicalExperience.responsibilities}</div>
                <div>{practicalExperience.dateStart}</div>
                <div>{practicalExperience.dateEnd}</div>
            </div>
        </div>

    );
}