import { Footer } from '@busconnect/components/footer';
import { Navbar } from '@busconnect/components/navbar';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { TbRoute } from 'react-icons/tb'
import { MdPayment, MdVerifiedUser } from 'react-icons/md'
import Link from 'next/link'

export function Terms() {
  return (
    <div className="bg-gradient-to-b from-[#553399] to-[#F74] flex flex-col py-16 text-white">
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
          <div className="chat chat-end">
            <div className="chat-bubble">1</div>
          </div>
          <div className="chat chat-start pb-8">
            <div className="chat-bubble">
              Ok, me informe o seu ponto de partida.<br /><br />

              Envie sua localização atual.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              <HiOutlineLocationMarker
                size={100}
                color='#F74'
              />Localização</div>
          </div>
          <div className="chat chat-start pb-8">
            <div className="chat-bubble">
              Obrigado, agora me envie a localização de destino.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              <HiOutlineLocationMarker
                size={100}
                color='#F74'
              />Localização Final</div>
          </div>
          <div className="chat chat-start pb-8">
            <div className="chat-bubble">
              Aguarde, estou procurando...
            </div>
          </div>
          <div className="chat chat-start pb-8">
            <div className="chat-bubble">
              Próximos Ônibus para XXXXXXX:<br/><br/>
              C02 - Santana / Aldeia (Via Camará Shopping) sairá às{' '}
              {new Date().toLocaleTimeString('pt-BR')}              <br/> <br/>
              Acompanhe o ônibus clicando na lista abaixo.
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
        <MdVerifiedUser size={250} color="#553399" />
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
      <Terms />
      <Footer />
    </>
  )
}