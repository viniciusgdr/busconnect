import { Footer } from '@busconnect/components/footer';
import { Navbar } from '@busconnect/components/navbar';
import Image from 'next/image'

export function Terms() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className='text-center text-6xl p-16 text-[#553399] font-bold'>Fale Conosco</h1>
      <div className="flex flex-col justify-center w-auto items-center self-center  rounded-md p-4">
        <p className="text-[#F74] font-bold">Estamos presentes todos os dias de 7:30 às 16:40.</p>
      </div>
      <form className="flex flex-col justify-center w-auto items-center self-center  rounded-md p-4">
        <label className="text-[#F74] font-bold">Nome</label>
        <input className="border-2 border-[#F74] rounded-md p-4" type="text" />
        <label className="text-[#F74] font-bold">Email</label>
        <input className="border-2 border-[#F74] rounded-md p-4" type="text" />
        <label className="text-[#F74] font-bold">Mensagem</label>
        <textarea className="border-2 border-[#F74] rounded-md p-4" />
        <button className="btn btn-primary ">Enviar</button>
      </form>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Navbar />
      <Terms />
      <Footer />
    </>
  )
}