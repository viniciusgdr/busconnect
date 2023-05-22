import Link from 'next/link';

export function App() {
  return (
    <div 
      className="animate-fade-in-left bg-[#0a2342] h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl pb-8 text-center">
        Olá! Seja bem vindo ao Chat da BusConnect!
      </h1>
      <p className="pb-4">Iremos te guiar a partir de agora.</p>
      <button className="btn btn-success rounded-lg text-center bg-[#63bf2d]">Vamos começar?</button>
      <p className="underline-offset-0	italic text-white">
        *Ao Continuar você concorda com todos os{' '}
        <Link href="/termos" className="text-blue-400 visited:text-purple-600"> termos </Link>{' '}
        de serviço.
      </p>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <App />
    </>
  );
}
