import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home2';
import Write from './components/Write'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useEffect, useState } from 'react';
import { Modal } from './components/Components/Modal';
import Unauthorized from './components/Unauthorized'

export default function App2() {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setIsAuthorized(true)
                    setCurrentUser(user)
                })
                
            } else {
                res.json().then(err => console.log(err.error))
                setIsAuthorized(false)
            }
        })
    },[])

    return(
        <>
      <Navbar currentUser={currentUser} />
      { isAuthorized ? 
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Write />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
     : <Unauthorized />    
    }
     
    </>
    )
}