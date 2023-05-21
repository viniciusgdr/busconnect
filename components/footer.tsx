import Image from 'next/image'
import { BsWhatsapp, BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col bg-[#553399] text-white p-4 items-center">
      <Image src="/busconnectlogo.png" alt="Logo" width={300} height={150} />
      <div className="grid grid-cols-4 p-2 gap-4">
        <BsInstagram />
        <BsFacebook />
        <BsWhatsapp />
        <Link href='https://github.com/viniciusgdr'>
          <BsGithub />
        </Link>
      </div>
      <div className="text-center">
        <p>BusConnect - Uma Empresa Fictícia feita por Vinícius</p>
        <p>© Copyright 2023 - Todos os Direitos Reservados</p>
      </div>
    </footer>
  )
}