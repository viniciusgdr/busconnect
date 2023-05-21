import Image from 'next/image'
import { BsWhatsapp, BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

export function Footer(props?: {
  color?: string,
  image?: string
}) {
  return (
    <footer className={
      `flex flex-col text-white p-4 items-center bg-[${
        props?.color ? props.color : '#553399'
      }]`
    }>
      <Image src={props?.image ? props.image : "/busconnectlogo.png"} alt="Logo" width={300} height={150} />
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