import { Footer } from '@busconnect/components/footer';
import { Navbar } from '@busconnect/components/navbar';
import Image from 'next/image'

export function Terms() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className='text-center text-6xl p-16 text-[#553399] font-bold'>Quem Somos?</h1>
      <div className="flex flex-col justify-center w-auto items-center self-center  rounded-md p-4">
        <p className="text-[#F74] font-bold">O BusConnect nasceu em 2023 com o propósito de reinventar a mobilidade, oferecendo comodidade, conveniência e facilidade através da tecnologia.</p>
      </div>
      <Image src="/nobg-busconnect.png" alt="Logo" width={800} height={150} className="p-4" />
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