  import React from 'react'
  import { assets } from '../assets/assets'
  import { NavLink, useNavigate } from 'react-router-dom'
  import { useAppContext } from '../context/AppContext'
  const Navbar = () => {
      const [open, setOpen] = React.useState(false)
      const { user, setUser, setShowUserLogin } = useAppContext();
      const navigate = useNavigate();
      
      const Logout = async () => {
setUser(null);
        navigate('/');
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

          <NavLink to="/" className="flex items-center gap-2">
                <img className="h-9" src={assets.logo}  alt="dummyLogoColored" />
            </NavLink>

            {/* Desktop Menu */}
              <div className="hidden sm:flex items-center gap-8">
               
                  <NavLink to="/" end>Home</NavLink>
                  <NavLink to="/Porduct">All Product</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
  
                  <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                      <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                      <img src={assets.search}></img>
                  </div>
  
                  <div className="relative cursor-pointer">
<img className="w-6 opacity-80" src={assets.nav_cart_icon} alt="cart" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                  </div>
  
                  {!user ? (
                      <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full" onClick={() => setShowUserLogin(true)}>Login</button>
                  ) : (
                    <div className="">
                      <img src={assets.profile_icon} className='w-10' alt="" ></img>
                      <ul>
                        <li>My order's </li>
                        <li>LogOut</li>
                      </ul>
                    </div>
                  )}
            </div>
              <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                  {/* Menu Icon SVG */}
                  <img src={assets.menu_icon}></img>
              </button>
    
              {/* Mobile Menu */}
              {
                  open && (
                      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                          
                          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                          <NavLink to="/Product" onClick={() => setOpen(false)}>All Product</NavLink>
                          {user &&
                              <NavLink to="/Product" onClick={() => setOpen(false)}>My Order</NavLink> 
                          }
                          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink> 
  
                          {!user ? (
                              <button 
                                  onClick={() => { setOpen(false); setShowUserLogin(true) }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                                  Login
                              </button> 
                          ) : (
                              <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm" onClick={() => Logout()}>
                                  Logout
                              </button>
                          )}
                      </div> 
                  )
              }
  
          </nav>
      )
}
export default Navbar