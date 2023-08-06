import './output.css'

export default function Output(props) {
    const personalInfo = props.personalInfo;
    const education = props.education;
    const practicalExperience = props.practicalExperience;
    const selectedImage = props.selectedImage;

    function PracticalSecond() {
        return (
            <div className="experience">
                <div className="experience-date">
                    <div>{practicalExperience.dateStart2}</div>
                    -
                    <div>{practicalExperience.dateEnd2}</div>
                </div>
                <div className="experience-info">
                    <div>{practicalExperience.companyName2}</div>
                    <div><strong>Position: </strong>{practicalExperience.position2}</div>
                    <div><strong>Responsibilities: </strong>{practicalExperience.responsibilities2}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="output">
            <div className='personal-info-output'>
                <img
                    className="profile-picture"
                    alt="not found"
                    src={selectedImage ? URL.createObjectURL(selectedImage) : "#"}

                />
                <div>
                    <div>{personalInfo.firstName}</div>
                    <div>{personalInfo.lastName}</div>

                    <div className="info-light">{personalInfo.email}</div>
                    <div className="info-light">{personalInfo.phone}</div>
                </div>

            </div>
            <div className="education-output">
                <h3>Education</h3>
                <div className="school">
                    <div className="school-date">{education.studyDate}</div>
                    <div className="school-info">
                        <div>{education.schoolName}</div>
                        <div>{education.studyTitle}</div>
                    </div>
                </div>


                {education.schoolName2 ? <hr /> : null}

                <div className="school">
                    <div className="school-date">{education.studyDate2}</div>
                    <div className="school-info">
                        <div>{education.schoolName2}</div>
                        <div>{education.studyTitle2}</div>
                    </div>
                </div>
            </div>
            <div className="practical-experience-output">
                <h3>Practical Experience</h3>
                <div className="experience">
                    <div className="experience-date">
                        <div>{practicalExperience.dateStart}</div>
                         -
                        <div>{practicalExperience.dateEnd}</div>
                    </div>
                    <div className="experience-info">
                        <div>{practicalExperience.companyName}</div>
                        <div><strong>Position: </strong>{practicalExperience.position}</div>
                        <div><strong>Responsibilities: </strong>{practicalExperience.responsibilities}</div>
                    </div>
                </div>

                {practicalExperience.companyName2 ? <><hr /><PracticalSecond /></> : null}

            </div>
        </div>

    );
}