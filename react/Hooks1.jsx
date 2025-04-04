import { useEffect, useState } from "react";

export const Hooks1 = ()=>{
const [count , setCount ] = useState(0)

useEffect(()=>{
    document.title = `you click button ${count}`;

},[count])

return(<>
<h5>useEffect has two different types</h5>
<button onClick={()=>{setCount(count + 1)}} >Click</button>
<h4>Event base side Effect(buttonClick)</h4>
<h4>Render base side Effect(fetching data)</h4>

    {/* useContext 
        Provides a way to share state across multiple components without prop drilling    
        Alternative to Redux for simpler global state needs
    */}

{/* const theameContect = createContext();
function  app() {
    return(<>
    <themeContext.Provider value="value">
        <form / >
    </themeContext.Provider>
    </>)
}
function form() {
    const theme = useContext (theameContect);    
} */}
</>)

}
export default Hooks1;