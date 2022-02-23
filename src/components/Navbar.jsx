import React from 'react'
import { Link } from 'react-router-dom'
import style from 'styled-components'

export default function Navbar({isLogin, handleOnclick}) {
    const Button = style.button `
    padding: 8px 16px;
    font-weight: bold;
    font-size: 20px;
    background-color: transparent;
    color: white;
    :hover {
        color: rgb(248 113 113);
    }
`
  return (
    <nav className=' bg-gray-500 h-16 flex shadow-xl'>
        <div className='container mx-auto flex items-center justify-between'>
            <div className='text-4xl text-white font-bold'>Tiny Blog</div>
            <div className='px-4'>
              <Link to='/'><Button>HOME</Button> </Link>
               <Link to='/posts'><button className='text-xl text-white font-bold hover:text-red-400'>WRITE</button> </Link>
               {isLogin ? <Link to='/logout'> <Button onClick={handleOnclick}>LOG OUT</Button> </Link>: <Link to='/login'><Button>LOG IN</Button></Link>}
            </div>
        </div>
    </nav>
  )
}
