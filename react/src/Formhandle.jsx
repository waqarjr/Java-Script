import { useState ,useRef} from "react";

export const Formhandle = ()=>{
    const [value , setValue] = useState('');
    const [gender , setGender] = useState('');
    const [select , setSelect ] = useState('');
    const [cheack , setcheck] = useState([]);

    const inputRef = useRef(null);
    const selectRef = useRef(null);
    const cheackRef = useRef([]);

    const cheackbox = (e)=>{
        if(e.target.checked){
            setcheck([...cheack,e.target.value])    
        }else {
            setcheck(cheack.filter((event)=> event!=e.target.value))
        }
    }
    const handleConSub = (e)=>{
        e.preventDefault();
        const name = {
            name : value,
            gender : gender,
            city : select,
            language : cheack
        }
        console.log(name);
    }
    const cheackbox123 = (e)=>{
        
    }
    const handleUnSub = (e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
        console.log(selectRef.current.value);
    }
return(<>
{/* 
    In React, controlled and uncontrolled components refer to two different approaches for handling form inputs and their state.   
    Controlled Components
    Definition: The component's value is controlled by React state. 
    State Management: The input value is stored in the React component's state and updated via onChange events.
    Data Flow: State → Input Value → onChange → Update State → Re-render.

    Uncontrolled Components
    Definition: The input value is managed by the DOM itself, not React state.
    State Management: Uses ref to access the input value when needed (e.g., on form submission).
    Data Flow: User types → DOM updates → Ref fetches value on demand.
*/}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Controlled Components</th>
      <th>Uncontrolled Components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>State Management</td>
      <td>Managed by React state</td>
      <td>Managed by DOM</td>
    </tr>
    <tr>
      <td>Value Handling</td>
      <td>value prop + onChange</td>
      <td>ref to access value</td>
    </tr>
    <tr>
      <td>Re-renders</td>
      <td>Re-renders on every change</td>
      <td>No re-renders</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td>Easy (real-time)</td>
      <td>Manual (on submit)</td>
    </tr>
    <tr>
      <td>Use Case</td>
      <td>Forms needing real-time updates</td>
      <td>Simple forms, file inputs</td>
    </tr>
  </tbody>
</table>

            <p>Contolled Component</p>
<form onSubmit={handleConSub}>
Name: <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} /> <br />

Gender : <br /><label>Male : <input type="radio" value="male" name="male" onClick={(e)=>setGender(e.target.value)} /></label>
<label >Female : <input type="radio" name="male" value="female" onClick={(e)=>setGender(e.target.value)} /></label>
<br />

<select name="city" id="city" onChange={(e)=>setSelect(e.target.value)} >
    <option value="lahore">Lahore</option>
    <option value="Okara">Okara</option>
    <option value="multan">Multan</option>
    <option value="sahiwal">Sahiwal</option>
</select><br />
<label>Urdu : <input type="checkbox" value="urdu" onClick={cheackbox} />  </label>
<label>English : <input type="checkbox" value="english" onClick={cheackbox} />  </label>
<label>French : <input type="checkbox" value="french" onClick={cheackbox} />  </label>
<label>Chiness : <input type="checkbox" value="chiness" onClick={cheackbox} />  </label>

<button type="submit">Submit</button>
</form>


            <p>UnControlled Component</p>
<form onSubmit={handleUnSub}>
    <input type="text" ref={inputRef} /><br />
<select name="city" id="city" ref={selectRef} >
    <option value="lahore">Lahore</option>
    <option value="Okara">Okara</option>
    <option value="multan">Multan</option>
    <option value="sahiwal">Sahiwal</option>
</select><br />
<label>Urdu : <input type="checkbox" value="urdu" onClick={cheackbox123} />  </label>
<label>English : <input type="checkbox" value="english" onClick={cheackbox123} />  </label>
<label>French : <input type="checkbox" value="french" onClick={cheackbox123} />  </label>
<label>Chiness : <input type="checkbox" value="chiness" onClick={cheackbox123} />  </label>
<button type="submit">Submit </button>
</form>

<p>In console this will two times re-render bcoz of StrickMood</p>
<ul>
    <li>First render: Updates state and logs the new value.</li>
    <li>Second render: Verifies consistency (no side effects).</li>
</ul>

</>)

}
export default Formhandle;