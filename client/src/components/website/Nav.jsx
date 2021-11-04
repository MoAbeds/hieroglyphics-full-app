import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../files/Logo.png'


export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (

    
      <div className=" px-4  mx-auto flex flex-wrap items-center justify-between bg-transparent ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <Link className=" flex flex-row text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to={'/'}>
          <img src={Logo} class='w-5 h-5 mr-2'  />
          Jko Ai
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
        </div>
        <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
            <Link  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"  to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline-block w-5 mr-2 stroke-current" >
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={'/detect'} >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline-block w-5 mr-2 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" class="inline-block w-5 mr-2 stroke-current" />
                     </svg>Detect</Link>
            </li>

          </ul>
        </div>
      </div>
  




  )
}
