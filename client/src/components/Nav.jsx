import { NavLink } from 'react-router-dom'


const Nav = () => {
    

  return (
    <nav className='border-b shadow-sm'>
        <ul className='flex gap-4 p-1 mx-auto w-40 cursor-pointer'>
            <NavLink to='/'><li className=' p-1 px-4 rounded-full hover:text-red-500'>Submit</li></NavLink> 
            <NavLink to='/view'><li className=' p-1 px-4 rounded-full hover:text-red-500'>View</li></NavLink>
        </ul>
    </nav>
  )
}

export default Nav