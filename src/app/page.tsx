import { Button } from '@/components/ui/button';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiShadcnui, SiZod, SiPrisma } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { Card } from '@/components/ui/card';
import { CircleUser, RefreshCw, Smartphone, SunMoon, Zap } from 'lucide-react';
import Link from 'next/link';
import { FaGolang } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className='antialiased'>
      <div className='fixed flex w-full items-center justify-between gap-2 border-b bg-background p-4'>
        <div>
          <ul className='flex gap-4'>
            <li>
              <Link href='#intro'>Introdução</Link>
            </li>
            <li>
              <Link href='#context'>Contexto</Link>
            </li>
            <li>
              <Link href='#objectives'>Objetivos</Link>
            </li>
            <li>
              <Link href='#features'>Diferenciais</Link>
            </li>
          </ul>
        </div>

        <div className='space-x-2'>
          <Button asChild>
            <Link href='/auth/sign-in'>Entrar</Link>
          </Button>
          <Button asChild>
            <Link href='/auth/sign-up'>Registrar</Link>
          </Button>
        </div>
      </div>

      <section
        id='intro'
        className='flex h-screen flex-col items-center justify-center'
      >
        <h1 className='text-6xl'>
          Um simples chat usando <strong>NextJS</strong> e{' '}
          <strong>Golang</strong>
        </h1>
      </section>

      <section
        id='context'
        className='flex h-screen flex-col items-center justify-center gap-4'
      >
        <h2 className='text-6xl'>Contexto</h2>
        <div className='max-w-[1280px] gap-4 text-center text-2xl'>
          <p>
            Utilizar Next.js 14 me permitiu criar uma interface de usuário
            dinâmica e de alto desempenho, garantindo que as mensagens sejam
            entregues instantaneamente e que a navegação seja rápida e
            intuitiva. Para gerenciar as conexões em tempo real e garantir que
            todas as mensagens sejam entregues de forma rápida e confiável,
            implementei uma API em Golang. Essa API é responsável por gerenciar
            os WebSockets, permitindo uma comunicação bidirecional eficiente
            entre os clientes e o servidor.
          </p>
        </div>
      </section>

      <section
        id='objectives'
        className='flex h-screen flex-col items-center justify-center gap-8 text-center'
      >
        <h2 className='text-6xl'>Objetivos</h2>
        <div className='grid grid-cols-2 gap-8 text-xl'>
          <div className='space-y-4'>
            <h3 className='text-3xl'>Frontend</h3>
            <ul className='flex gap-2'>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <Zap />
                    <h4>Velocidade</h4>
                  </div>
                  <p>
                    Otimizar o frontend para garantir que as mensagens sejam
                    renderizadas e exibidas instantaneamente ao usuário.
                  </p>
                </Card>
              </li>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <SunMoon />
                    <h4>Temas</h4>
                  </div>
                  <p>
                    Implementar suporte a temas claro e escuro que seguem
                    automaticamente o tema do sistema do usuário para
                    proporcionar uma experiência visual consistente e agradável.
                  </p>
                </Card>
              </li>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <Smartphone />
                    <h4>Responsividade</h4>
                  </div>
                  <p>
                    Garantir que o aplicativo seja completamente responsivo,
                    proporcionando uma experiência de usuário consistente e
                    agradável em todos os dispositivos e tamanhos de tela.
                  </p>
                </Card>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-3xl'>Backend</h3>
            <ul className='flex gap-2'>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <Zap />
                    <h4>Velocidade</h4>
                  </div>
                  <p>
                    Garantir que as mensagens sejam entregues ao cliente do
                    usuário o mais rápido possível de forma performática.
                  </p>
                </Card>
              </li>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <RefreshCw />
                    <h4>Concorrência</h4>
                  </div>
                  <p>
                    Implementar programação concorrente para otimizar o uso de
                    recursos e aumentar a eficiência na entrega de mensagens.
                  </p>
                </Card>
              </li>
              <li>
                <Card className='max-w-72 space-y-2 p-4'>
                  <div className='flex justify-center gap-2'>
                    <CircleUser />
                    <h4>Criar Contas</h4>
                  </div>
                  <p>
                    Permitir que os usuários criem contas de forma rápida e
                    segura, garantindo a proteção de seus dados pessoais.
                  </p>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id='features'
        className='flex h-screen flex-col items-center justify-center gap-8'
      >
        <h2 className='text-6xl'>Diferenciais</h2>
        <ul className='flex gap-4'>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://go.dev/' target='_blank'>
                  <FaGolang className='size-16' />
                </Link>
              </div>
              <p>
                Golang, ou Go, é uma linguagem de programação desenvolvida pelo
                Google, lançada em 2009. Ela combina a eficiência de linguagens
                como C com a produtividade de linguagens como Python, sendo
                fácil de aprender e usar. Go é conhecida por sua simplicidade,
                performance e suporte a concorrência, o que a torna ideal para
                desenvolvimento de software escalável e eficiente.
              </p>
            </Card>
          </li>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://nextjs.org/' target='_blank'>
                  <RiNextjsFill className='size-16' />
                </Link>
              </div>
              <p>
                Next.js é um framework de desenvolvimento React que facilita a
                criação de aplicações web com renderização do lado do servidor,
                roteamento baseado em arquivos e geração estática. Ele oferece
                performance otimizada e uma excelente experiência de
                desenvolvimento. NextAuth.js é uma biblioteca de autenticação
                flexível para Next.js, permitindo fácil integração de provedores
                de autenticação, como OAuth e credenciais, garantindo segurança
                e simplicidade na gestão de usuários.
              </p>
            </Card>
          </li>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://www.prisma.io/' target='_blank'>
                  <SiPrisma className='size-16' />
                </Link>
              </div>
              <p>
                Prisma ORM é uma ferramenta moderna de mapeamento
                objeto-relacional para Node.js e TypeScript, que simplifica a
                interação com bancos de dados. Ele oferece um gerador de esquema
                que cria tipos TypeScript seguros, proporcionando uma
                experiência de desenvolvimento consistente e eficiente. Com
                Prisma, é fácil realizar operações de CRUD, migrações de banco
                de dados e consultas complexas, tornando o desenvolvimento de
                aplicações baseadas em banco de dados mais intuitivo e menos
                propenso a erros.
              </p>
            </Card>
          </li>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://zod.dev/' target='_blank'>
                  <SiZod className='size-16' />
                </Link>
              </div>
              <p>
                Zod é uma biblioteca de validação de esquemas para TypeScript,
                projetada para garantir que os dados estejam no formato correto
                e sejam seguros. Ele permite definir esquemas de validação de
                maneira declarativa, fornecendo feedback detalhado de erros. Com
                Zod, é possível validar dados de entrada de APIs, formulários de
                entrada de usuários e garantir a integridade dos dados, tudo
                isso com uma sintaxe simples e integrada ao TypeScript,
                proporcionando segurança de tipos e validação robusta.
              </p>
            </Card>
          </li>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://ui.shadcn.com/' target='_blank'>
                  <SiShadcnui className='size-16' />
                </Link>
              </div>
              <p>
                ShadCN é uma biblioteca de componentes para React que se integra
                perfeitamente com Tailwind CSS. Ela oferece uma coleção de
                componentes pré-estilizados e personalizáveis, permitindo que
                desenvolvedores criem interfaces de usuário rápidas e
                visualmente consistentes. ShadCN facilita o desenvolvimento
                front-end ao combinar a flexibilidade do Tailwind CSS com a
                simplicidade de componentes reutilizáveis, tornando a criação de
                interfaces modernas e responsivas mais eficiente.
              </p>
            </Card>
          </li>
          <li>
            <Card className='max-w-72 space-y-2 p-4'>
              <div className='flex justify-center gap-2'>
                <Link href='https://tailwindcss.com/' target='_blank'>
                  <RiTailwindCssFill className='size-16' />
                </Link>
              </div>
              <p>
                Tailwind CSS é um framework de utilitários CSS que permite aos
                desenvolvedores criar designs customizados diretamente no HTML.
                Em vez de classes predefinidas para componentes, Tailwind
                oferece uma vasta coleção de classes utilitárias para estilizar
                elementos de forma rápida e consistente. Isso promove a criação
                de interfaces flexíveis e responsivas, facilitando o
                desenvolvimento e a manutenção de projetos com design único e
                altamente personalizável.
              </p>
            </Card>
          </li>
        </ul>
      </section>
    </div>
  );
}
