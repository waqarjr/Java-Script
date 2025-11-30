import { useEffect, useRef, useState,useMemo } from "react";

export const PracHooks = ()=>{

const [car , setCar ] = useState({
    name : "Ferrari",
    model : "V8",
    color : "red",
})
const [count , setCount] = useState(0)
const ref = useRef(0);
const bthClick = ()=>{
    setCar((prev)=>{
            return{...prev,color :"blue"}
    })
}
useEffect(()=>{
    ref.current = ref.current + 1;  
    // setCount(e => e +1 );
    // setTimeout(()=>{
    //     setCount(e => e +1);
    // },1000)
})

const [number , setNumber]  = useState(); 



return(<>
<button onClick={()=>{setCount(e => e + 1)}} >Click Me</button>
<p>My {car.name} has a {car.model} & his color is {count}</p>
<h4>I have been re rendet {ref.current} times</h4>

<input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
<p>Double of number (memoized): {useMemo(() => (number ? number * 2 : 0), [number])}</p>

{/* 
Virtual Dom is a  lightwaight , in memory representation of the actual dom 

What are React lifecycle methods, and when are they used?

React lifecycle methods are special functions that provide granular level control to developers to hook into specific points
in a component's life cycle.

useState used to store featch data and the loading state 

useEffect is used to perform side Effects like api calling all this handle by, and feacth the data 
when the component mounts 

useRef gives you a mutable reference to DOM elements or to store values that don’t cause re-renders.

useMemo memorizes the result of a function, so it doesn’t recompute unless dependencies change.

useReducer is a hook that lets you manage complex state logic using a reducer function 
const [state, dispatch] = useReducer(reducerFunction, initialState);
reducerFunction: A function that updates state based on an action.
dispatch: A function used to send actions (e.g. { type: 'increment' }).
initialState: The default value of the state.


Prop drilling is when data has been pass down through many layers of components 

What is the Context API, and how is it used for state management?

The Context API in React is a feature that allows you to manage and share state or data globally across a component
tree, without needing to pass props manually at every level.

What are higher-order components? Give an example.

It is a function that takes a component as an input and returns a new component with additional functionality or modified behavior.

How do React portals work, and when should they be used?

In React, a Portal is a way to render a component's children into a different part of the DOM outside the parent
component's hierarchy, while maintaining the React component structure

What is React strict mode, and how does it help developers?

Helps developers identify potential problems in an application by intentionally invoking certain warnings and behavior in
the application



*/}


</>)

}
export default PracHooks;