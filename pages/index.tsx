import Image from 'next/image'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdInformationCircleOutline, IoMdBus } from 'react-icons/io'
import { BsWhatsapp, BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs'
import { TbRoute } from 'react-icons/tb'
import { MdPayment, MdVerifiedUser } from 'react-icons/md'
import { Navbar } from '@busconnect/components/navbar'
import { Footer } from '@busconnect/components/footer'
import Link from 'next/link'


export function Main() {
  return (
    <div className="">
      <div className="hidden lg:flex justify-center">
        <div className="flex flex-col bg-center bg-no-repeat w-[1024px] h-[1024px]"
          style={{
            backgroundImage: "url('/path-homepage.svg')"
          }}
        >
          <div className="hero flex flex-col items-center">
            <div className="p-[45px] text-center">
              <h1 className="text-4xl font-bold text-[#553399]">
                A BusConnect te leva muito mais longe
              </h1>
              <p className="text-xl text-[#F74] font-bold">
                Se locomover em Camaragibe nunca foi tão prático e rápido
              </p>
              <button className="btn btn-success">WhatsApp</button>
            </div>
          </div>
          <div className="hero hero-content flex flex-col w-1/3 p-8">
            <h1 className="text-4xl font-bold text-[#553399]">
              Não durma no ponto
            </h1>
            <p className="text-xl text-[#F74]">
              O BusConnect usa o WhatsApp para te avisar quando o ônibus está chegando
            </p>
            <HiOutlineLocationMarker
              size={100}
              color='#F74'
            />
          </div>
          <div className="hero hero-content flex flex-col w-1/3 p-8">
            <h1 className="text-4xl font-bold text-[#553399]">
              Todas as informações do seu ônibus a um clique
            </h1>
            <p className="text-xl text-[#F74]">
              Horário dos veículos em tempo real, previsões precisas e as melhores rotas.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden max-lg:flex">
        <div className="flex flex-col bg-no-repeat w-[1024px] h-[1024px] text-center">
          <div className="hero flex flex-col items-center">
            <div className="p-[45px]">
              <h1 className="text-4xl font-bold text-[#553399]">
                A BusConnect te leva muito mais longe
              </h1>
              <p className="text-xl text-[#F74] font-bold">
                Se locomover em Camaragibe nunca foi tão prático e rápido
              </p>
              <button className="btn btn-success">WhatsApp</button>
            </div>
          </div>
          <div className="hero hero-content flex flex-col">
            <HiOutlineLocationMarker
              size={100}
              color='#F74'
            />
            <h1 className="text-4xl font-bold text-[#553399]">
              Não durma no ponto
            </h1>
            <p className="text-xl text-[#F74]">
              O BusConnect usa o WhatsApp para te avisar quando o ônibus está chegando
            </p>
          </div>
          <div className="hero hero-content flex flex-col">
            <IoMdInformationCircleOutline
              size={100}
              color='#F74'
            />
            <h1 className="text-4xl font-bold text-[#553399]">
              Todas as informações do seu ônibus a um clique
            </h1>
            <p className="text-xl text-[#F74]">
              Horário dos veículos em tempo real, previsões precisas e as melhores rotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Partnerships() {
  return (
    <div className="bg-gradient-to-b from-[#F74] to-[#553399] flex flex-col py-16">
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold text-white">
          Empresas Participantes
        </h1>
        <p className="mt-4 text-xl md:px-20 text-white">
          Conheça as empresas que fazem o BusConnect acontecer
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col items-center">
          <Image src="/cooperune.png" alt="Logo" width={500} height={150} className="p-4" />
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <div className="bg-gradient-to-b from-[#553399] to-[#F74] flex flex-col py-16 text-white">
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold ">
          Serviços
        </h1>
      </div>
      <div className="grid grid-cols-2 self-center items-start p-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-44 p-4 bg-[#F74] rounded-full flex justify-center">
            <h1 className="font-bold">Para você</h1>
          </div>
          <div className="flex flex-col p-4 items-center justify-center ">
            <h1 className="w-44 p-4 text-center">Previsão de ônibus</h1>
            <h1 className="w-44 p-4 text-center">Melhor Rota para seu Destino</h1>
            <h1 className="w-44 p-4 text-center">Recarga para Celular</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-44 p-4 bg-[#553399] rounded-full flex justify-center">
            <h1 className="font-bold">Para empresas</h1>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h1 className="w-44 p-4 text-center">Serviços Digitais</h1>
            <h1 className="w-44 p-4 text-center">Tecnologias</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-auto items-center self-center  rounded-md p-4">
        <HiOutlineLocationMarker
          size={100}
          color='#F74'
        />
        <h1 className="text-4xl font-bold text-white">
          Trajeto descomplicado para você chegar mais rápido
        </h1>
        <p className="text-xl text-white">
          Trace rotas para ir de uma lugar para outro e tenha as melhores opções até o destino.
        </p>
        <TbRoute size={250} color="#553399"/>
      </div>
      <div className="flex flex-col justify-center w-auto items-center self-center  rounded-md p-4">
        <MdPayment
          size={100}
          color='#F74'
        />
        <h1 className="text-4xl font-bold text-white">
        Recarga Digital a qualquer momento
        </h1>
        <p className="text-xl text-white">
        Recarregue seu Cartão direto pelo WhatsApp via PIX!
        </p>
        <MdVerifiedUser size={250} color="#553399"/>
      </div>
      <h1 className="text-4xl font-bold p-8 text-center">Veja como funciona!</h1>
      <div className="border-solid border-2 border-sky-500 flex flex-col justify-center w-auto bg-black self-center rounded-lg p-8">
        <div className="chat chat-end">
          <div className="chat-bubble">Oi!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            Olá! Seja bem vindo ao WhatsApp da BusConnect.

            Com o que posso lhe ajudar?
          </div>
        </div>
        <div className="chat chat-start pb-8">
          <div className="chat-bubble">
            Selecione uma opção:<br /><br />
            1 - Descobrir Rota<br />
            2 - Previsão de Ônibus<br />
            3 - Recarregar seu Cartão BEM<br />
          </div>
        </div>
        <button className="btn btn-success">
          <BsWhatsapp size={20} />
          Continuar no WhatsApp
        </button>
        <p className="underline-offset-0	italic text-white">
          Ao Continuar você concorda com todos os{' '}
          <Link href="/termos" className="text-blue-400 visited:text-purple-600"> termos </Link>{' '}
          de serviço.
        </p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <Partnerships />
      <Footer />
    </>
  )
}

/*
<div className="p-[45px]">
            <h1 className="text-4xl font-bold text-[#553399]">
              Não durma no ponto
            </h1>
            <p className="text-2xl text-[#F74] font-bold">
              O BusConnect usa o WhatsApp para te avisar quando o ônibus está chegando
            </p>
          </div>
          <div className="p-[45px]">
            <h1 className="text-4xl font-bold text-[#553399]">
              Todas as informações do seu ônibus a um clique
            </h1>
            <p className="text-2xl text-[#F74] font-bold">
              Horário dos veículos em tempo real, previsões precisas e as melhores rotas.
            </p>
          </div>
          */