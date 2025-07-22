import Image from "next/image";

export default function Home() {
  return (
    <div className='w-screen md:h-auto flex flex-col items-center justify-center bg-gray-100 mt-1'>

      {/* Section 1 */}
      <section className="w-full h-auto mt-10 md:h-[690px] p-4 bg-[url(/mobile.png)] md:bg-[url(/tablet.png)] lg:bg-[url(/desktop.png)] bg-cover bg-center bg-no-repeat">

        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">

          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center md:text-left gap-6 p-4">

            <h1 className="text-3xl font-bold mt-20 text-center text-white">Transformando cliques em clientes.</h1>

            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-2xl">SAIBA MAIS</button>

          </div>

          <div className="w-1/2 h-full flex items-center justify-center mt-4">

            <Image src="/mascote2.png" alt="logo" width={600} height={100} />

          </div>

        </div>

      </section>

    </div>
  );
}
