import Input from "./Input.jsx";
import {useState} from "react";
import Output from "./Output.jsx";
import "./app.css";

export default function App() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        phone: "+18003441280"
    });

    const [education, setEducation] = useState({
        schoolName: "School Of Education",
        studyTitle: "Grandmaster",
        studyDate: "2023-08-01",
    })

    const [practicalExperience, setPracticalExperience] = useState({
        companyName: "Cool Company",
        position: "Highest Position",
        responsibilities: "Almost all the work",
        dateStart: "2023-08-01",
        dateEnd: "2023-08-05",
    })

    function handlePersonalChange(event) {
        const changingField = event.target.name;
        const newInfo = {...personalInfo};
        newInfo[changingField] = event.target.value;
        setPersonalInfo(newInfo);
    }

    function handleEducationChange(event) {
        const changingField = event.target.name;
        const newInfo = {...education};
        newInfo[changingField] = event.target.value;
        setEducation(newInfo);
    }

    function handlePracticalExperience(event) {
        const changingField = event.target.name;
        const newInfo = {...practicalExperience};
        newInfo[changingField] = event.target.value;
        setPracticalExperience(newInfo);
    }

    return (
        <>
            <Input
                personalInfo={personalInfo}
                handlePersonalChange={handlePersonalChange}
                education={education}
                handleEducationChange={handleEducationChange}
                practicalExperience={practicalExperience}
                handlePracticalExperience={handlePracticalExperience}
            />
            <Output
                personalInfo={personalInfo}
                education={education}
                practicalExperience={practicalExperience}
            />
        </>
    )
}