import { useState } from 'react'

import './App.css'


import CodeEditor from './pages/EditorPage'
import HomePage from './pages/Home';
import Navbar from './components/navbar/Navbar';
import ProblemsPage from './pages/ProblemsPage';
import { Route,Routes } from 'react-router-dom';
import SingleQuestion from './pages/SingleQuestion';
function App() {
  const [code, setCode] = useState('// Write your code here');

  return (
    <>
      <Navbar/>
     <Routes>   
          
       <Route index element={<HomePage/>}/>
       <Route path="/problems" element={<ProblemsPage/>}/>
       <Route path='/problem/:problemName' element={<SingleQuestion/>}/>
       <Route path="/editor" element={<CodeEditor/>}/>
       
     </Routes>
      
     
      
    </>
  )
}

export default App
