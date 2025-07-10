import { useState } from "react";
import Card from "./Card";

export const Parent = ()=>{
    const handle =  ()=>{alert("Alrt")}
    const user = {
        name: "Alice",
        address: {
            city: "New York",
            zip: 12345
        }
    };
    const fruits = ['apple','banana','orange']
    const [toogle , setToogle] = useState(false);
    const [name , setName] =  useState('');

     const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  
  // 2. Toggle state
  const [show, setShow] = useState(true);

  // Add new item
  const addItem = () => {
    setItems([...items, name]);
    setName('')
  }

return(<>
<h1> this is a heading</h1>
<Card onClick={user} />
{fruits.map((items,index)=>(
<ul key={index} >
    <li>{items}</li>
</ul>))}
{/* {fruits.map((items,index)=>{console.log(index,items)})} */}
<button onClick={()=>{setToogle(!toogle)}} >{toogle ? 'ON':'OFF'}</button>

<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

<div>
      <h2>Fruit List</h2>

      {/* 3. Toggle Button */}
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide List' : 'Show List'}
      </button>

      {/* 4. Conditionally render list */}
      {show && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Use stable key if available
          ))}
        </ul>
      )}

      {/* 5. Add item button */}
      <button onClick={addItem}>Add Fruit</button>
    </div>
</>)

}
export default Parent;