import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/musica_logo.svg'
import { HiOutlineHome, HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

const links = [
  { name: 'Home', to: '/' },
  {
    name: 'My Collections',
    to: '/collections',
  },
  {
    name: 'Radio',
    to: '/radio',
  },
  {
    name: 'My Videos',
    to: '/videos',
  },
]

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        className='flex flex-row justify-start items-center my-8 text-lg font-medium text-gray-600 hover:text-yellow-400'
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}>
        <span className=''>{item.name}</span>
      </NavLink>
    ))}
  </div>
)
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className='p-7  flex-col '>
        <img src={logo} alt='logo' />
        <div className='hidden md:flex'>
        <NavLinks />
        </div>
      </div>

      {/**Mobile sidebar */}
      <div className='absolute md:hidden block top-6 right-3'>
        {!mobileMenuOpen ? (
          <HiOutlineMenuAlt4
            className='text-white mr-2 w-6 h-6'
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className='text-white mr-2 w-6 h-6'
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}>
        <img src={logo} alt='logo' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar
