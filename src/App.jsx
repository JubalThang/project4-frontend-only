import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useEffect, useState } from 'react';
import { Modal } from './components/Components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/home')
    .then(res => {
      if (res.ok) {
        fetch('/me')
        .then(r => {
          if (r.ok) {
            r.json().then(user => setCurrentUser(user))
            setLoggedIn(true)
          }
        })
        res.json().then(posts => setPosts(posts))
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
          fetch('/me')
            .then(res => {
              if (res.ok) {
                res.json().then(user => setCurrentUser(user))
                setLoggedIn(true)
                navigate('/')
              } else {
                res.json().then(console.log)
              }
            })
        } else {
          res.json().then(console.log)
        }
      })
  }

  function submitPost(post) {
    const newPost = { ...post, "likes" : 0 ,"user_id": currentUser.id }

    // console.log(currentUser)
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(post => {
        setPosts([post, ...posts])
        navigate('/')
      })
  }

  function hadleLogout() {
    showModal &&
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
      setShowModal(!showModal)
  }
  function handleLikes(uid) {

    fetch(`/posts/${uid}/likes`, {
      method: 'PATCH'
    })
      .then(res => {
        if (res.ok) {
          const newPosts = posts.map(p =>
            p.id === uid ? { ...p, likes: p.likes + 1 } : p
          )
          setPosts(newPosts)
        } else {
          alert('Please login to perfom this action!')
          // console.log('please login to perform this action!')
        }
      })
  }

  function handleDelete(uid) {
    fetch(`/posts/${uid}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          const newPosts = posts.filter(p => p.id !== uid)
          setPosts(newPosts)
        } else {
          res.json().then(error => alert(error.error))
        }
      })
  }

  return (
    <>
      <Navbar currentUser={currentUser} handleOnclick={hadleLogout} />
      <Routes>
        <Route path='/' element={<Home posts={posts} setPosts={setPosts} handleLikes={handleLikes} handleDelete={handleDelete} />} />
        <Route path='/posts' element={<Write isLoggedIn={loggedIn} handlePost={submitPost} />} />
        <Route path='/login' element={<Login onSignIn={handleSignIn} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Modal showModal={showModal} setShowModal={hadleLogout} showHideModal={() => setShowModal(!showModal)} />
    </>
  );
}

export default App;
