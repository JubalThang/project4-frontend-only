import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/home')
      .then(res => {
        if (res.ok) {
          res.json().then(posts => setPosts(posts))

          fetch('/me')
            .then(res => {
              if (res.ok) {
                res.json().then(user => setCurrentUser(user))
                setLoggedIn(true)
              }
            })
        } else {
          console.error(res.error())
        }
      })
  }, [])

  function handleSignIn(user) {
    console.log(user)
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(user)
          setLoggedIn(true)
          navigate('/')
        } else {
          console.error(res.error)
        }
      })
  }

  function submitPost(post){
    console.log(post)
  }

  function hadleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        setLoggedIn(false)
        setCurrentUser(null)
        navigate('/')
      } else {
        console.error(res.erro)
      }
    })
  }
  return (
    <>
      <Navbar isLogin={loggedIn} handleOnclick={hadleLogout} />
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/posts' element={<Write currentUser={currentUser} handlePost={submitPost}/>} />
        <Route path='/login' element={<Login onSignIn={handleSignIn} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
