import { useState } from "react"

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Porfolio',
      link: '/portfolio',
    },{
      name: 'Contact',
      link: '/contact',
    },
  ]
  return (
    <>
      <nav className="w-full h-auto bg-gray-800 lg:px-24 md:px-16 sm:px-14px-12 py-2">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h1 className="text-3xl text-teal-600 font-semibold">Navbar
              </h1>
              <div className="md:hidden">
                <button className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                  <i class="fa-solid fa-xmark"></i>
                    {navbar ? (
                      <i class="fa-solid fa-xmark" className="text-gray-400 cursor-pointer"></i>
                    ): (
                      <i class="fa-solid fa-bars"></i>
                    )}
                </button>
              </div>
            </div>
          </div>

          <div className={`flex-justify-between items-center md:block ${navbar ?'block': 'hidden'}`}>
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-[1rem] font-medium ease-out hover:text-gray-200 duration-700">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar