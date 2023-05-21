import { Footer } from '@busconnect/components/footer';
import { Navbar } from '@busconnect/components/navbar';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { TbRoute } from 'react-icons/tb'
import { MdPayment, MdVerifiedUser } from 'react-icons/md'
import Link from 'next/link'

export function Main() {
  return (
    <div className="bg-gradient-to-b from-[#553399] to-[#F74] flex flex-col py-16 text-white">
      <div className="flex flex-col justify-center items-center p-4">
        <HiOutlineLocationMarker
          size={100}
          color='#F74'
        />
        <h1 className="text-4xl font-bold text-white">
          Tecnologias
        </h1>
        <p className="flex flex-col justify-center w-1/2">
          Acreditamos que, para mudar o transporte público no país, não só podemos como devemos usar a tecnologia a favor da sociedade. Pensando nisso, desenvolvemos alguns produtos que vêm facilitando o dia a dia não somente de passageiros, mas também de empresas de transporte e órgãos gestores.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <MdPayment
          size={100}
          color='#F74'
        />
        <h1 className="text-4xl font-bold text-white">
          Recarga Digital
        </h1>
        <p className="flex flex-col justify-center w-1/2">
          Os Usuários do transporte público podem recarregar seus cartões de transporte de forma rápida e segura, sem precisar sair de casa. A recarga é feita pelo aplicativo, com cartão de crédito ou débito, e o crédito é disponibilizado em até 24 horas.
        </p>
      </div>
      <div className="flex flex-col justify-center  items-center p-4">
        <MdVerifiedUser
          size={100}
          color='#553399'
        />
        <h1 className="text-4xl font-bold text-white">
          Bilhetagem Eletrônica
        </h1>
        <p className="flex flex-col justify-center w-1/2">
          A Bilhetagem Eletrônica é uma solução completa para o gerenciamento de transporte público. Com ela, é possível realizar a gestão de receitas, controle de frota, emissão de relatórios e muito mais.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 ">
        <BsWhatsapp
          size={100}
          color='#553399'
        />
        <h1 className="text-4xl font-bold text-white">
          Fale Conosco
        </h1>
        <p className="flex flex-col justify-center w-1/2 text-center">
          Entre em contato conosco através do Whatsapp, clicando no botão abaixo.
        </p>
        <Link href='https://api.whatsapp.com/send?phone=5511999999999'>
          <button className="bg-white text-[#F74] p-4 rounded-lg">
            Fale Conosco
          </button>
        </Link>
        </div>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer color='#F74' image='/busconnectlogo-2.png' />
    </>
  )
}