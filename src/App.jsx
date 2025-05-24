import { useState } from 'react'

import './App.css'


import CodeEditor from './pages/EditorPage'
import HomePage from './pages/Home';
import Navbar from './components/navbar/Navbar';
import ProblemsPage from './pages/ProblemsPage';
import { Route,Routes } from 'react-router-dom';
import SingleQuestion from './pages/SingleQuestion';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/footer/Footer';
import AdminPanel from './pages/AdminPennal';
import Dashboard from './components/adminParts/Dashboard';
import Users from './components/adminParts/Users';

import QuestionAdd from './components/questionsAdd/QuestionAdd';
import QuestionForm from './components/questionsAdd/QuestionForm';
import Submission from './components/adminParts/Submission';
import TestCases from './components/adminParts/Testcases';
function App() {
  const [code, setCode] = useState('// Write your code here');

  return (
    <div className='font-[Lora]'>
      <Navbar/>
     <Routes>   
          
       <Route index element={<HomePage/>}/>
       <Route path="/problems" element={<ProblemsPage/>}/>
       <Route path='/problem/:problemName' element={<SingleQuestion/>}/>
       <Route path="/editor" element={<CodeEditor/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/admin" element={<AdminPanel />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="questions" element={<QuestionAdd />} />
          <Route path="questions/new" element={<QuestionForm />} />
          <Route path="submissions" element={<Submission />} />
          <Route path="test-cases" element={<TestCases />} />
        </Route>
       
     </Routes>
     <Footer/>
      
     
      
    </div>
  )
}

export default App
