import React,{ useState , useMemo,useCallback ,useReducer} from "react";

const ChildComponent = React.memo(({ onClick, value }) => {
  console.log('Child rendered');
  return <button onClick={() => onClick(value)}>Add {value}</button>;
});

// useReducer:
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Hook = ()=>{
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(100000);
  
    function expensiveCalculation(num) {
      console.log(num);
      let total = 0;
      for (let i = 0; i < num; i++) {
        total += i;
      }
      return total;
    }
  
    // const result = expensiveCalculation(value); // Runs on every render
    const result = useMemo(() => expensiveCalculation(value), [value]); // expensiveCalculation only runs when value changes, not on every re-render

    // useState
    const [count1, setCount1] = useState(0);
  // Without useCallback, this would be recreated on every render
  // causing ChildComponent to re-render unnecessarily
  const increment = useCallback((value1) => {
    setCount1(prev => prev + value1);
  }, []); 

  // useReducer :
  const [state, dispatch] = useReducer(reducer, { count: 0 });

    return(<>
        {/* 
        Syntax of useMemo :
            import { useMemo } from "react";
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

        The first argument is a function that returns the computed value.
        The second argument is a dependency array [a, b]. If these values don’t change, the computation is skipped.    

        When to use this :
        You have expensive calculations inside a component.
        The component re-renders frequently.
        The computed value does not need to be recalculated unless dependencies change.

        */}
        
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>

        {/* useCallback 
        useCallback prevents the function from being recreated.
        React.memo ensures the child doesn’t re-render unless necessary.
         */}
         <div>
      <h2>Count: {count1}</h2>
      <ChildComponent onClick={increment} value={1} />
      <ChildComponent onClick={increment} value={5} />
      <ChildComponent onClick={increment} value={10} />
    </div>

    {/* useReducer :
    useReducer is an alternative to useState for managing complex state logic in React components. 
    You have multiple related state updates.
    State transitions are complicated (e.g., form handling, authentication).
    You want to keep state logic separate from the component.
    
    Syntax : 
    const [state, dispatch] = useReducer(reducer, initialState);
    reducer: A function that defines how state updates.
    initialState: The default state value.
    dispatch: A function used to update the state.  
    */}
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>

      {/* lazy Loading
      Lazy loading is a technique that delays loading components until they are needed, improving performance.
      By default, React loads all components at once, which can slow down large applications.
      import Home from "./Home";
      import About from "./About";
      function App() {
        return (
          <div>
            <Home />
            <About />
          </div>
        );
      }
      export default App;
    Problem: Even if the user doesn’t visit the "About" page, React loads it at startup.

    Example : With Lazy Loading (React.lazy + Suspense)
    import { lazy, Suspense } from "react";
    const Home = lazy(() => import("./Home"));
    const About = lazy(() => import("./About"));
    function App() {
      return (
        <Suspense fallback={<h2>Loading...</h2>}>
          <Home />
          <About />
        </Suspense>
      );
    }
    export default App;
    Lazy Loading Routes (React Router)
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"));
function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;

      */}

    </>)

}
export default Hook;