export const Indroduction  = ()=>{

return(<>
{/* Defination: Components 
        components are the building blocks of react app , like <header/><content/><footer/>,
        all the visible parts of apps eg:buttins input ,entire page
    What is a components actually?
    1 Java Script function with return   
    function callback (){
      return(<>
      </>)  // since react is a js library but it donot return html but it actually return Xml language 
    }
    Jsx
    not like html , a small different is present like we write only class in html but in jsx we write className as a attribute
    html: <button class="button" >Remove</button>
    jsx: <button className="button" >Remove</button>
    html is a static and unchanging but jsx is a dynamic javascript value by using {}
    const message = " world";
    <div>hello {message}</div>
    
    We can set attribute dynamically
    <img src={src}/>
    
    java Script can only return one Thing but in react we can return one Parent element from a component 
    like we use fragment <></>(better) or a div(wrost) element to return 

    but if we needed to pass value to another components for that we use Something called props

    props refers to (property of an object which is used to get value in parameters of each component) 
    const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
    };
    const App = () => {
      return <Greeting name="John" />;
    };
    // even i can pass value as a children props
    <parent>
      <child/>
    </parent>
    function parent(props) {
      return(props.child);
    }
      key props :
      keys are often used with lists (used in map function)
      key is a unique number , not a string
      {item.map(item =>{
        <components key={1} />
        })}

        Rendring:
        the process of taking code and display something on browser that process is called rendering
      How does rendering works ?
      he renders bcoz of vdom (virtual Document Object Model)
      react rendering steps 1: state changes (update vdom) 2: react "diffs" (hey i saw that) 3: "reconciliation" 
      
      Events handling (click,mouse hover,keybord press) 
      most used onClik,onChange,onSubmit

      How to manage data in react ? 
      by using states we can manage data  like (useState,useEffect,useRefrence,useContax,useReducer,useMemo,usecallback eg)
      useState : manage state
      useReducer : manage state
      useEffect : external system( like: api)
      useRefrence : "refrence " html
      useMemo : improve app pref
      useCallback : improve app pref
      useContex : use data pass throw context

      purity(how react components should work)
      means that thake same input and same output , 
      1: only return jsx 2: Dont chnage stuff that existed before rendering
      
      Strick mood :
      develop problems in developments 
*/}
  
</>)

}
export default Indroduction;