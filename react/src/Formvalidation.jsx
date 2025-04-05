import { useState } from "react";

export const Formvalidation = ()=>{

    const [formData , setFormData] = useState({
        name:"",
        gender:"",
    })
    
    const [value, setValue] = useState("");
    const [gender, setGender] = useState("");
    const [select, setSelect] = useState("");
    const [checkedLanguages, setCheckedLanguages] = useState([]);
    const [errors, setErrors] = useState({});
    
    
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setCheckedLanguages((prev) =>
      checked ? [...prev, value] : prev.filter((lang) => lang !== value)
    );
  };

  const handleConSub = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!value.trim()) newErrors.value = "Name is required.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!select) newErrors.select = "Please select a city.";
    if (checkedLanguages.length === 0) newErrors.languages = "Select at least one language.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);  
    }
    



    return(<>

        <form onSubmit={handleSubmit}>
        Name : <input type="text" value={formData.name}  onChange={(e)=>setFormData({...formData, name: e.target.value})} />
        <br />
        Gender : <br />
        <label >Male : <input type="radio" value="male" name="gender" onClick={(e)=>setFormData({...formData, gender: e.target.value})}  /> 
        Female : <input type="radio" name="gender" value="female"  onClick={(e)=>setFormData({...formData, gender: e.target.value})}/></label>
        <br />
        <button type="submit">Submit</button>
        </form>

        <form onSubmit={handleConSub}>
      <div>
        Name: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        {errors.value && <p style={{ color: "red" }}>{errors.value}</p>}
      </div>

      <div>
        Gender: <br />
        <label>
          Male: <input type="radio" value="male" name="gender" onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Female: <input type="radio" value="female" name="gender" onChange={(e) => setGender(e.target.value)} />
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      <div>
        <select name="city" id="city" onChange={(e) => setSelect(e.target.value)}>
          <option value="">Select City</option>
          <option value="lahore">Lahore</option>
          <option value="okara">Okara</option>
          <option value="multan">Multan</option>
          <option value="sahiwal">Sahiwal</option>
        </select>
        {errors.select && <p style={{ color: "red" }}>{errors.select}</p>}
      </div>

      <div>
        <label>Urdu: <input type="checkbox" value="urdu" onChange={handleCheckbox} /></label>
        <label>English: <input type="checkbox" value="english" onChange={handleCheckbox} /></label>
        <label>French: <input type="checkbox" value="french" onChange={handleCheckbox} /></label>
        <label>Chinese: <input type="checkbox" value="chinese" onChange={handleCheckbox} /></label>
        {errors.languages && <p style={{ color: "red" }}>{errors.languages}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>   

    </>)

}
export default Formvalidation;