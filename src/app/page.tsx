'use client';

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='w-screen md:h-auto flex flex-col items-center justify-center bg-gray-100 mt-1 relative'>

      {/* Section 1 */}
      <section className="w-full h-auto mt-20 md:h-[690px] p-4 bg-[url(/mobile.png)] md:bg-[url(/tablet.png)] lg:bg-[url(/desktop.png)] bg-cover bg-center bg-no-repeat">

        <motion.div
          className="w-full h-full flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <motion.div
            className="w-1/2 h-full flex flex-col items-center justify-center text-center md:text-left gap-12 p-4"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <motion.h1
              className="text-4xl md:text-7xl font-bold mt-20 text-center text-white"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >

              Transformando cliques em clientes.

            </motion.h1>

            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >

              <Link
                href="https://wa.me/5569981175481?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 md:px-10 py-3 md:py-4 text-xl md:text-3xl text-white rounded-3xl bg-blue-500 hover:bg-blue-600 transition duration-600"
              >
                SAIBA MAIS
              </Link>

            </motion.div>

          </motion.div>

          <motion.div
            className="w-1/2 h-full flex items-center justify-center mt-4 mb-10"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            <Image src="/mascote2.png" alt="logo" width={600} height={100} />

          </motion.div>

        </motion.div>

      </section>

      {/* Section 2 */}
      <section className="w-full h-auto p-4 bg-gray-200 flex flex-col md:flex-row items-center justify-center gap-8">

        <div className="flex flex-col gap-8 items-center justify-center">

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quem somos?
          </motion.h2>

          <motion.p
            className="text-lg md:text-3xl text-gray-600 text-center max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Primeiro Ato é uma agência de marketing digital especializada em posicionar marcas, gerar autoridade e entregar resultados reais.

            Com uma abordagem estratégica, combinamos branding, tráfego pago, automações inteligentes e produção criativa para transformar negócios em referências digitais. Atuamos de forma consultiva, aliando performance e identidade visual com foco total em crescimento mensurável.
          </motion.p>

        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image src="/mascote1.png" alt="logo" width={600} height={100} />
        </motion.div>

      </section>

      {/* Section 3 */}
      <section className="w-full h-auto p-4 bg-blue-800 flex flex-col md:flex-row items-center justify-center gap-8 py-10">

        <div className="flex flex-col items-center justify-center gap-6 text-center">

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nosso Diferencial
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 place-items-center">

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Posicionamento como
                  Agência de Performance +
                  Presença Local.
                </p>
              </div>

            </motion.div>

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Abordagem centrada no
                  cliente e orientada para
                  soluções.
                </p>
              </div>

            </motion.div>

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Foco na qualidade,
                  confiabilidade e segurança.
                </p>
              </div>

            </motion.div>

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Parceria estratégica e
                  colaborativa com os
                  clientes.
                </p>
              </div>

            </motion.div>

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Montamos seu projeto de
                  acordo com a sua
                  necessidade.
                </p>
              </div>

            </motion.div>

            <motion.div className="w-[350px] h-32 border border-white rounded-2xl flex items-center justify-center shadow-lg p-1">

              <div className="w-80">
                <Image src="/certo.png" alt="Diferencial 1" width={300} height={100} />
              </div>

              <div className="p-2 flex">
                <p className="text-lg md:text-2xl text-white font-semibold mt-2">
                  Atenção ao longo prazo e
                  suporte contínuo.
                </p>
              </div>

            </motion.div>

          </div>

        </div>

        <motion.div
          className="flex flex-col gap-8 items-center justify-center"
        >
          <Image src="/mascote3.png" alt="logo" width={600} height={100} />
        </motion.div>

      </section>

      {/* Botão do WhatsApp */}
      <div className="fixed bottom-10 right-10 z-50">

        <Link
          href="https://wa.me/55699981175481?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
          className="flex items-center relative animate-pulse"
          aria-label="Abrir conversa no WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >

          <p className="hidden md:block text-lg md:text-2xl text-white font-semibold bg-green-500 py-1 absolute right-[60px] w-48 px-3 rounded-l-full z-10">
            Contato rápido
          </p>

          <Image
            src="/whatsApp2.webp"
            alt="Ícone do WhatsApp"
            width={70}
            height={70}
            className="z-20"
            priority
          />

        </Link>
      </div>

    </div>
  );
}
