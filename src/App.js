import logo from './logo.svg';
import './App.css';
import { createContext, useState ,useEffect,useContext} from 'react';
const userContext = createContext();


function Component1(){
  return(
    <div>
     <h4> Component 1</h4>
     
     <Component2 />
    </div>
  )
}




function Component2(){
  const user=useContext(userContext);
  return(
    <div>
     <h4> Component 2</h4>
     <h3>{user}</h3>
    </div>
  )
}

function App() {
  let[user,setUser]=useState("gayatri");
  let [color,setColor]=useState("red");
  let[months,setMonths]=useState(["Apr","May","June"]);
  let[count,setCount]=useState(0);

useEffect(()=>{
  let timer=setTimeout(()=>{
  setCount((count)=>count+1);
  },1000);
  return()=>clearTimeout(timer);
},[]);


  return (
    <div className="App">
      <h1>React state Hooks</h1>
      <h2>useState</h2>
      <h3>{color}</h3>
      <button onClick={()=>{setColor("red");}}>RED</button>
      <button onClick={()=>{setColor("green");}}>GREEN</button>
      <hr/>
      <select>
        {
          months.map((month)=>{
            return(
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </select>
      <br/>
      <button onClick={()=>{setMonths(["Apr","May","June"])}}>Quarter1</button>
      <button onClick={()=>{setMonths(["Jul","AUG","SEP"])}}> Quarter2</button>
      <button onClick={()=>{setMonths(["OCT","NOV","DEC"])}}> Quarter3</button>
      <button onClick={()=>{setMonths(["JAN","FEB","MAR"])}}> Quarter4</button>
      <hr/>
      <h2>useEfFECT</h2>
      {count}
      <hr/>
      <h2>useContext</h2>
      <userContext.Provider value={user}>
        <Component1 user={user}/>
        </userContext.Provider>
    
    </div>
  );
}

export default App;
