import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"

import './App.css'
import ToDoComponent from './components/to-do-row/to-do'
import toDoPage from './Pages/todoPage/to.do.page'
// import toDoPage from './Pages/todoPage/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

<Route path='/sid' element={toDoPage}/>

{/* </Route> */}

    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
