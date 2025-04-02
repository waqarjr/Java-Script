import { useState , useMemo } from "react";
export const Hook = ()=>{
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(10);
  
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

    </>)

}
export default Hook;