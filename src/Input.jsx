import "./Input.css"

export default function Input(props) {
    const handlePersonalChange = props.handlePersonalChange;
    const handleEducationChange = props.handleEducationChange;
    const handleExperienceChange = props.handlePracticalExperience;
    const setSelectedImage = props.setSelectedImage;

    return (
        <div className="input">
            <div className="personal-info">
                {/*Name, email, phone number*/}
                <h4>Personal Information</h4>
                <form>
                    <label htmlFor="firstName">
                        <input type="text" id="firstName" name="firstName" onChange={handlePersonalChange}/>
                        First Name
                    </label>
                    <label htmlFor="lastName">
                        <input type="text" id="lastName" name="lastName" onChange={handlePersonalChange}/>
                        Last Name
                    </label>
                    <label htmlFor="email">
                        <input type="email" id="email" name="email" onChange={handlePersonalChange}/>
                        Email
                    </label>
                    <label htmlFor="phone">
                        <input type="text" id="phone" name="phone" onChange={handlePersonalChange}/>
                        Phone Number
                    </label>
                    <input
                        type="file"
                        className="profile-picture-input"
                        onChange={(event) => setSelectedImage(event.target.files[0]) }
                    />

                </form>
            </div>
            <div className="education">
                <h4>Education</h4>
                <form>
                    <label htmlFor="schoolName">
                        <input type="text" name="schoolName" id="schoolName" onChange={handleEducationChange}/>
                        School Name
                    </label>
                    <label htmlFor="studyTitle">
                        <input type="text" name="studyTitle" id="studyTitle" onChange={handleEducationChange}/>
                        Title Of Study
                    </label>
                    <label htmlFor="studyDate">
                        <input type="date" name="studyDate" id="studyDate" onChange={handleEducationChange}/>
                        Date Of Study
                    </label>
                </form>
                <hr />
                <form>
                    <label htmlFor="schoolName2">
                        <input type="text" name="schoolName2" id="schoolName2" onChange={handleEducationChange}/>
                        School Name
                    </label>
                    <label htmlFor="studyTitle2">
                        <input type="text" name="studyTitle2" id="studyTitle2" onChange={handleEducationChange}/>
                        Title Of Study
                    </label>
                    <label htmlFor="studyDate2">
                        <input type="date" name="studyDate2" id="studyDate2" onChange={handleEducationChange}/>
                        Date Of Study
                    </label>
                </form>
            </div>
            <div className="practical-experience">
                <h4>Practical Experience</h4>
                <form>
                    <label htmlFor="companyName">
                        <input type="text" name="companyName" id="companyName" onChange={handleExperienceChange}/>
                        Company Name
                    </label>
                    <label htmlFor="position">
                        <input type="text" name="position" id="position" onChange={handleExperienceChange}/>
                        Position
                    </label>
                    <label htmlFor="responsibilities">
                        <input type="text" name="responsibilities" id="responsibilities" onChange={handleExperienceChange}/>
                        Main Responsibilities
                    </label>
                    <label htmlFor="dateStart">
                        <input type="date" name="dateStart" id="dateStart" onChange={handleExperienceChange}/>
                        Started working
                    </label>
                    <label htmlFor="dateEnd">
                        <input type="date" name="dateEnd" id="dateEnd" onChange={handleExperienceChange}/>
                        Ended working
                    </label>
                </form>
                <hr/>
                <form>
                    <label htmlFor="companyName2">
                        <input type="text" name="companyName2" id="companyName2" onChange={handleExperienceChange}/>
                        Company Name
                    </label>
                    <label htmlFor="position2">
                        <input type="text" name="position2" id="position2" onChange={handleExperienceChange}/>
                        Position
                    </label>
                    <label htmlFor="responsibilities2">
                        <input type="text" name="responsibilities2" id="responsibilities2" onChange={handleExperienceChange}/>
                        Main Responsibilities
                    </label>
                    <label htmlFor="dateStart2">
                        <input type="date" name="dateStart2" id="dateStart2" onChange={handleExperienceChange}/>
                        Started working
                    </label>
                    <label htmlFor="dateEnd2">
                        <input type="date" name="dateEnd2" id="dateEnd2" onChange={handleExperienceChange}/>
                        Ended working
                    </label>
                </form>
            </div>
        </div>
        
    );
}