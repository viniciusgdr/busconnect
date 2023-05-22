import Image from 'next/image'
import { MdDarkMode } from 'react-icons/md'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

export function Navbar() {
  const toggleDarkMode = () => {
    const modeDark = localStorage.getItem('modeDark')
    document.documentElement.removeAttribute('data-theme')
    if (modeDark === 'false' || modeDark === null) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('modeDark', 'true')
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('modeDark', 'false')
    }
  }

  const items = [
    { name: 'Quem somos', href: '/quem-somos' },
    { name: 'Como Usar', href: '/como-usar' },
    {
      name: 'Para Empresas',
      href: '/para-empresas'
    },
    { name: 'Fale Conosco', href: '/contato' },
  ]
  return (
    <div>
      <div className="navbar bg-[#553399] text-primary-content">
        <div className='navbar-start'>

        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image src="/busconnectlogo.png" alt="Logo" width={300} height={150} />
          </Link>
          <div className="dropdown dropdown-end hidden max-lg:flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-600"
            >
              {
                items.map((item, index) => {
                  return (
                    <li key={index} className='hover-bordered'>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  )
                })
              }
              <a className="btn btn-success btn-sm rounded-btn" href='https://wa.me/558183064666'>
                <BsWhatsapp size={20} />{' '}
                Abrir o WhatsApp
              </a>
            </ul>
          </div>
          <div className="hidden lg:flex">
            {
              items.map((item, index) => {
                return (
                  <div key={index} className="flex items-stretch">
                    <Link className="btn btn-ghost btn-sm rounded-btn" href={item.href}>{item.name}</Link>
                  </div>
                )
              })
            }
            <div className="flex items-stretch">
              <Link className="btn btn-secondary btn-sm rounded-btn " href='/app'>
                App Online
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleDarkMode}
          >
            <MdDarkMode />
          </button>
        </div>
      </div>
    </div>
  )
}