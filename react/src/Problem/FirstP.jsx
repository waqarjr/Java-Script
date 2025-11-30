import { useState } from "react";

export const FirstP = () => {

    const [data ,setData] = useState({
        name: "",
        age: "",
        courses: [],
        pass: false,
})

    const handleCourses = (e) => {
        const { name, checked } = e.target;
        setData((prevData) => {
            const newCourses = checked 
                ? [...prevData.courses, name] 
                : prevData.courses.filter(course => course !== name);
            return { ...prevData, courses: newCourses };
        });
    }

    const toggleHandle = (e) => {
        if(e.target.checked) {
            setData({ ...data, pass: true });
        }
    }
    const formSubmit = async(e) => {
    e.preventDefault();
    data.id = Date.now();     
    const existingData = await JSON.parse(localStorage.getItem("studentData")) || [] ;
    existingData.push(data);
    localStorage.setItem("studentData", JSON.stringify(existingData));
    alert("Data saved successfully!");
    // We use JSON.parse when retrieving data from localStorage to convert the stored JSON string back into a JavaScript object or array.
    setData({
        name: "",
        age: "",
        courses: [],
        pass: false
    })
    }

    return (<>
    <h1>Student Info</h1>
    <form onSubmit={formSubmit} >
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required 
        onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name}
        />
        <br />
        <label htmlFor="age">Age :</label>
        <input type="number" name="age" id="age"
        onChange={(e) => setData({ ...data, age: e.target.value })} value={data.age}
        />
        <br />
        <h3>Courses</h3>
        <label >English : <input type="checkbox" name="english" id="english" onChange={handleCourses} /></label>
        <label >Urdu : <input type="checkbox" name="urdu" id="urdu" onChange={handleCourses}/></label>
        <label >Physic : <input type="checkbox" name="physic" id="physic" onChange={handleCourses}/></label>
        <label >Biology : <input type="checkbox" name="biology" id="biology" onChange={handleCourses}/></label>
        <br />
        <label htmlFor="Pass">Pass</label>
        <input type="checkbox" name="pass" id="pass" 
        onChange={toggleHandle}
        />
        <br />
        <button type="submit" >Submit</button>
    </form>
    </>);
}
export default FirstP;