'use client';

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='w-screen md:h-auto flex flex-col items-center justify-center bg-gray-100 mt-1'>

      {/* Section 1 */}
      <section className="w-full h-auto mt-10 md:h-[690px] p-4 bg-[url(/mobile.png)] md:bg-[url(/tablet.png)] lg:bg-[url(/desktop.png)] bg-cover bg-center bg-no-repeat">

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
      <section className="w-full h-auto p-4 bg-gray-200 flex flex-col items-center justify-center gap-8">

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          O que fazemos?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Somos especialistas em transformar a presença digital da sua empresa, criando sites e landing pages que convertem visitantes em clientes.
        </motion.p>

      </section>

    </div>
  );
}
