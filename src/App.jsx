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
          res.json().then(console.log)
        }
      })
  }, [])

  function handleSignIn(user) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(setCurrentUser(user))
          // setCurrentUser(user)
          setLoggedIn(true)
          navigate('/')
        } else {
          res.json().then(console.log)
        }
      })
  }

  function submitPost(post){
    
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-type' : 'Application/json'
      },
      body: JSON.stringify({...post, "user_id" : currentUser.id})
      
    })
    .then(res => {
      if(res.ok) {
        const newPosts = {...post, "user": { "id" : currentUser.id, "username" : currentUser.username}}
        setPosts([newPosts, ...posts])
        navigate('/')
      } else {
        console.log("something went wrong!!")
         res.json().then(console.log)
      }
    })
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
        res.json().then(console.log)
      }
    })
  }

 
  return (
    <>
      <Navbar isLogin={loggedIn} handleOnclick={hadleLogout} />
      <Routes>
        <Route path='/' element={<Home posts={posts} setPosts={setPosts}/>} />
        <Route path='/posts' element={<Write isLoggedIn={loggedIn} handlePost={submitPost}/>} />
        <Route path='/login' element={<Login onSignIn={handleSignIn} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
