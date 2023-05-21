import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'

export function Navbar() {
  const [modeDark, setModeDark] = useState(false)

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme')
    if (modeDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  })

  const items = [
    { name: 'Quem somos', href: '/quem-somos', subitems: [] },
    {
      name: 'Serviços',
      href: '/servicos',
      subitems: [
        { name: 'Previsão de Ônibus', href: '/previsao-de-onibus' },
        { name: 'Recarga pelo WhatsApp', href: '/recarga-pelo-whatsapp' }
      ]
    },
    { name: 'Como Usar', href: '/como-usar', subitems: [] },
    {
      name: 'Para Empresas',
      href: '/',
      subitems: [
        { name: 'Adicione sua Empresa', href: '/adicione-sua-empresa' }
      ]
    },
    { name: 'Fale Conosco', href: '/', subitems: [] },
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
                    item.subitems.length ? (
                      <li key={index}>
                        <a>{item.name}</a>
                        <ul tabIndex={index} className="menu menu-compact dropdown dropdown-end shadow bg-slate-600 rounded-box w-52">
                          {
                            item.subitems.map((subitem, index) => {
                              return (
                                <li key={index}>
                                  <a href={subitem.href}>{subitem.name}</a>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    ) : (
                      <li key={index} className='hover-bordered'>
                        <a href={item.href}>{item.name}</a>
                      </li>
                    )
                  )
                })
              }
            </ul>
          </div>
          <div className="hidden lg:flex">
            {
              items.map((item, index) => {
                return (
                  item.subitems.length ? (
                    <div key={index} className="dropdown dropdown-hover dropdown-end">
                      <div tabIndex={0} className="btn btn-ghost btn-sm rounded-btn">
                        {item.name}
                      </div>
                      <ul tabIndex={0} className="shadow menu dropdown-content bg-slate-600 rounded-box w-52">
                        {
                          item.subitems.map((subitem, index) => {
                            return (
                              <li key={index}>
                                <a href={subitem.href}>{subitem.name}</a>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  ) : (
                    <div key={index} className="flex items-stretch">
                      <a className="btn btn-ghost btn-sm rounded-btn" href={item.href}>{item.name}</a>
                    </div>
                  )
                )
              })
            }
          </div>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-square btn-ghost"
            onClick={
              () => {
                setModeDark(!modeDark)
              }
            }
          >
            <MdDarkMode />
          </button>
        </div>
      </div>
    </div>
  )
}