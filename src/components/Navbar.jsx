
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ currentUser, handleOnclick }) {

  const Button = ({ text, func }) => {

    if (func) {
      return <button onClick={func} className=' font-black text-xl text-white px-2 hover:text-red-300'>{text}</button>
    } else {
      return (
        <button className=' font-black text-xl text-white px-2 hover:text-red-300'>{text}</button>
      )
    }
  }

  return (

    <nav className=' bg-gray-500 h-16 flex shadow-xl'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link to='/'> <div className='text-4xl text-white font-bold cursor-pointer '>Tiny Blog</div> </Link>
        <div className='flex items-center'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'bg-red-500 rounded-md py-2' : ''}> <Button text='HOME' /> </NavLink>
          <NavLink to='/posts' className={({ isActive }) => isActive ? 'bg-red-500 rounded-md py-2' : ''}> <Button text='WRITE' /> </NavLink>
          {currentUser ?
            <>
              <Button func={handleOnclick} text='LOG OUT' />
              <Button text={`@${currentUser.username.toLowerCase()}`}/> 
              <button className='bg-red-500 rounded-full h-12 w-12'></button>
            </>
            :
            <NavLink to='/login' className={({ isActive }) => isActive ? 'bg-red-500 rounded-md py-2' : ''}><Button text='LOG IN' /></NavLink>}
           
        
        </div>
      </div>
    </nav>

  )
}

