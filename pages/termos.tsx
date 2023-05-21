import { Footer } from '@busconnect/components/footer';
import { Navbar } from '@busconnect/components/navbar';

export function Terms() {
  return (
    <div>
      <h1 className='text-center text-6xl p-16'>Política de Privacidade</h1>
      <div className="flex flex-col items-start min-h-screen h-auto justify-start p-16">
        <p>A Política de Privacidade do BusConnect foi elaborada para garantir a proteção e a privacidade dos dados pessoais dos usuários. Nós nos comprometemos a coletar, armazenar e utilizar apenas as informações estritamente necessárias para o funcionamento adequado do serviço oferecido.</p>
        <p>Ao utilizar o BusConnect, os usuários concordam com a coleta e o uso de seus dados pessoais de acordo com esta Política de Privacidade. Os dados coletados podem incluir informações como nome, endereço de e-mail, número de telefone e localização geográfica, necessários para fornecer os serviços solicitados.</p>
        <p>Todas as informações coletadas são tratadas de forma confidencial e utilizadas exclusivamente para os fins estabelecidos nesta Política de Privacidade. Não compartilharemos, venderemos ou divulgaremos seus dados pessoais a terceiros sem o seu consentimento expresso, a menos que seja exigido por lei ou necessário para cumprir com obrigações contratuais.</p>
        <p>Implementamos medidas de segurança adequadas para proteger os dados pessoais dos usuários contra acesso não autorizado, perda, uso indevido ou divulgação. Utilizamos protocolos de segurança padrão do setor, como criptografia de dados, firewalls e controles de acesso, para garantir a integridade e a confidencialidade das informações fornecidas.</p>
        <p>Os usuários têm o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais a qualquer momento. Caso desejem exercer esses direitos ou tenham alguma dúvida ou preocupação relacionada à privacidade, podem entrar em contato conosco por meio dos canais disponibilizados no site.</p>
        <p>Ao utilizar o BusConnect, os usuários reconhecem que o envio de informações pela internet não é totalmente seguro e que, apesar de nossos esforços para proteger os dados pessoais, não podemos garantir a segurança absoluta das informações transmitidas.</p>
        <p>A Política de Privacidade do BusConnect pode ser atualizada periodicamente, e quaisquer alterações serão publicadas no site. É responsabilidade dos usuários revisar regularmente esta política para estar ciente de quaisquer modificações.</p>
        <p>Ao utilizar o BusConnect, os usuários concordam com esta Política de Privacidade e consentem com a coleta, o uso e a divulgação de suas informações pessoais conforme descrito aqui.</p>
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