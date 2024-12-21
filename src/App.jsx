import React, { Suspense,useCallback, useEffect, useMemo, useState }  from 'react'

import { use } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const  DashBoard = React.lazy(()=> import('./components/DashBoard'))
const Landing = React.lazy(()=> import('./components/Landing'))  

// function App() {
 
//   return (
//     <div>
//       <HeaderWithButton/>
//       <Header title="Hrakirat 1"/>
//       <Header title="Hrakirat 1"/>
      
//     </div>
//   )
// }

// function HeaderWithButton(){
//   const [title, setTitle] = useState("my name is lakhan");

//   function updateTitle(){
//     setTitle("my name is "+Math.random())
//   }
//   return <div>
//     <button onClick={updateTitle}>update title</button>
//     <Header title={title}/>
//   </div>
// }

// function Header({title}){
//   return <div>
//    {title}
//   </div>
// }

// function App() {
//   const [title, setTitle] = useState("my name is lakhan");

//   function updateTitle(){
//     setTitle("my name is "+Math.random())
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>update title</button>
//       <Header title={title}/>
//       <Header title="Hrakirat 1"/>
//       <Header title="Hrakirat 1"/>
//       <Header title="Hrakirat 1"/>
//       <Header title="Hrakirat 1"/>
      
//     </div>
//   )
// }



// const Header = React.memo(({title})=>{
//   return <div>
//    {title}
//   </div>
// })

// let counter =4;
// function App(){
//   const [todos, setTodos] = useState([{
//     id:1,
//     title:"go to gym",
//     description:"go to gym 9 pm"
//   },{
//     id:2,
//     title:"go to gym",
//     description:"go to gym 9 pm"
//   },{
//     id:3,
//     title:"go to gym",
//     description:"go to gym 9 pm"
//   }])

//   function addTodo(){
    
//     setTodos([...todos,{
//       id:counter++,
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }
//   return(
//     <div>
//       <div>hi theere</div>
//       <button onClick={addTodo}>Update Todos</button>
//       {todos.map((todo) =>( <Todo key={todo.id} title={todo.title} description={todo.description}/>))}
//     </div>
//   )
// }

// function Todo({title, description}){
 
//   return <div>
    
//     <h1>{title}</h1>
//     <p>{description}</p>
//   </div>
// }


// function App(){
//   return(
//     <div><CardWrapper innerComponent={<TextComponent/>}></CardWrapper></div>
//   )
// }

// function TextComponent(){
//   return <div>
//     Hi there
//   </div>
// }

// function CardWrapper({innerComponent}){
//   return <div style={{border:"2px solid black"}}>
//     {innerComponent}
//   </div>
// }

// function App(){

//   return (
//     <div>
//       <Todo id={1}/>
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo]= useState({})

//     useEffect(()=>{
//       axios.get(`http://localhost:3000/todo?id=${id}`)
//       .then((response)=>{
//         setTodo(response.data.todo)
//       })
       
//     },[])
//   return <div>
//     <div>{todo.title}</div>
//     <div>{todo.description}</div>
//   </div>
// }


// function App(){
//   const [selectedId, setSelectedId]= useState(1)

  
//   return (
//     <div>
//       <button onClick={()=>{setSelectedId(1)}}>1</button>
//       <button onClick={()=>{setSelectedId(2)}}>2</button>
//       <button onClick={()=>{setSelectedId(3)}}>3</button>
//       <Todo id={selectedId}/>
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({})

//   useEffect(()=>{
//     axios.get(`http//localhost:3000/todo?id=${id}`)
//     .then((response)=>{
//       setTodo(response.data.todo)
//     })
//   })
//   return <div>
//     <h1>{todo.title}</h1>
//     <h5>{todo.description}</h5>
//   </div>
// }


// function App(){
//   const [counter, setCounter]= useState(0);
//   const [inputValue, setInputValue]= useState(1)


//   const count = useMemo(()=>{
    
//     let finalCount =0
//     for(let i=1; i<=inputValue;i++){
//       finalCount = finalCount+i
//     }
//     return finalCount;
//   },[inputValue])


//   return (
//     <div>
//       <input type="text" placeholder='find sum from 1 to n' onChange={(e)=>{setInputValue(e.target.value)}} />
//       <br /><br />
//        sum from 1 to {inputValue} is {finalCount}
//        <br /><br />
//        <button onClick={()=>{
//         setCounter(counter+1)
//        }}>Counter {counter}</button>
//     </div>
//   )
// }


// function App(){

//   const [count, setCount] = useState(0)

//   const logSomething = useCallback(()=>{
//     console.log("child clicked")
//   },[])

//   return (
//     <div>
//       <ButtonComponent inputFunction={logSomething}/>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>Click me {count}</button>
//     </div>
//   )
// }


// const ButtonComponent = React.memo(({inputFunction})=>{
//   console.log("child render")
//   return <div>
//     <button onClick={inputFunction}>Button clicked</button>
//   </div>
// })


export function App(){

  return( 
    <div>
      
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/DashBoard" element= {<Suspense fallback={"loading..."}><DashBoard/></Suspense> } />
        <Route path= "/Landing" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
        <button onClick={()=>{
          navigate("/DashBoard") 
        }}>DashBoard Page</button>
        
        <button onClick={()=>{
          navigate("/Landing")
        }}>Landing Page</button>
      </div>
}


export default App
