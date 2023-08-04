import Input from "./Input.jsx";
import {useState} from "react";
import Output from "./Output.jsx";

export default function App() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        phone: "+18003441280"
    });

    function handleChange(event) {
        const changingField = event.target.name;
        const newInfo = {...personalInfo};
        newInfo[changingField] = event.target.value;
        setPersonalInfo(newInfo);
        console.log(newInfo)
    }

    return (
        <>
            <Input personalInfo={personalInfo} handleChange={handleChange}/>
            <Output />
        </>
    )
}