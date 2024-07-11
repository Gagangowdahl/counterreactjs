//basic syntax of react js
// function App(){
//     return(
//         <div>
//         <section>
//             <h1 className ="h1">HEllo World</h1>
//         <p> hello bro how are you whts upp!!</p>
//         </section>
//             </div>
//     );
// }
// export default App

//creating a user input
// function App(){
//     return(
//         <div><form>
//        <label htmlfor="name">Name
//        </label>
//             <input type="text" id="name"/>
//             </form></div>
        
//     );
// }
// export default App

//creatoing  components
// import Add from "./index.js";
// function App(){
//     return(
//         <Add/>
        
        
//     );
// }
// export default App;

//Expressions in Jsx
// const myname="gagan ";
// const num= "23";
// const specialclass="simpleclass";
// function App(){
//             <p className={specialclass}>hello bro </p>
//         <p>4%4={4%4}</p>
//    <h1>{myname}{2+2}</h1>
//      </>   
//     );
// }
// export default App;
//lists
//  function App(){
//      const userinfo = [
//          {
//             username:"manu",
//          email:"gagan",
//          location:"banglore",
//  },           
//  ];
//     return(<>
//     <ol>{userinfo}</ol>
        
//      </>   
//     );
// }
// export default App;

//creating props
// const User =(props) => {
//             console.log(props.name);
//     return <section> 
//         <p> {props.name}</p>
//     </section>
// }
// function App(){
//     return(
// <>
//     <User name ="gagan"/>
// </>
        
//     );
// }
// export default App


//conditional statements  
// import "./styles.css"
// const Cart =() =>{
//     const item =["bag","book","pen","pencile"]
//     return (
//         <>
            
//  <h1> cart </h1> 
//             <ul>
//             <h2 style={{backgroundColor:"black"}} >You have {item.length} Product in the Cart </h2>
//                 {item.map(item=>(
//             <li key ={Math.random()}>{item}</li>
//                 ))} 
            
//             </ul>
//         </>
//         )
// };

// function App(){
//     return(
// <>
//     <Cart/>
// </>
        
//     );
// }
// export default App;

//incement and decrement of button 
// import {useState} from "react";

// const Counter=()=>{
//     const [count,setCount] = useState(0);
//     const Increment =()=>{
//         setCount(count +1);
//     }
//        const Decrement =()=>{
//         setCount(count -1);
//     }
    

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={Increment}>+</button>
//             <button onClick={Decrement}>-</button>
        
//         </>
//     );
// };
// function App(){
//     return(
// <>
// <Counter/>
// </>
//     );
// }
// export default App;


// import {useEffect , useState} from "react";
//  function App(){
//      const [value ,setValue ] = useState(0)
//     return(
// <>
//     <h2>Increment  of order click me  </h2>
// <h1>{value}</h1>
//     <button onClick={()=> setValue(value+1)} >clickme</button>
// </>
//     );
// }
// export default App;
//A small project on react js
// import {useState} from "react";
// import "./styles.css";

// const Counter=()=>{
//     const [count,setCount] = useState(0);
//     const Increment =()=>{
//         setCount(count +1);
//     }
//        const Decrement =()=>{
//         setCount(count -1);
//     }
    

//     return (
//         <>
//             <h1 clssName ="container">{count}</h1>
//             <button onClick={Increment} className ="increment">+</button>
//             <button onClick={Decrement} className ="increment">-</button>
        
//         </>
//     );
// };
// function App(){
//     return(
// <>
// <Counter/>
// </>
//     );
// }
// export default App;



























