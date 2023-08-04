import "./Input.css"

export default function Input(props) {
    const handleChange = props.handleChange;
    return (
        <div className="personal-info">
           {/*Name, email, phone number*/}
            <h4>Personal Information</h4>
           <form>
              <label htmlFor="firstName">
                  <input type="text" id="firstName" name="firstName" onChange={handleChange}/>
                  First Name
              </label>
              <label htmlFor="lastName">
                  <input type="text" id="lastName" name="lastName" onChange={handleChange}/>
                  Last Name
              </label>
              <label htmlFor="email">
                  <input type="email" onChange={handleChange}/>
                  Email
              </label>
               <label htmlFor="phone">
                   <input type="text" id="phone" name="phone" onChange={handleChange}/>
                   Phone Number
               </label>
           </form>
        </div>
    );
}