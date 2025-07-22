import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='w-screen md:h-auto flex flex-col items-center justify-center bg-gray-100 mt-1'>

      {/* Section 1 */}
      <section className="w-full h-auto mt-10 md:h-[690px] p-4 bg-[url(/mobile.png)] md:bg-[url(/tablet.png)] lg:bg-[url(/desktop.png)] bg-cover bg-center bg-no-repeat">

        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">

          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center md:text-left gap-6 p-4">

            <h1 className="text-4xl md:text-7xl font-bold mt-20 text-center text-white">Transformando cliques em clientes.</h1>

            <Link
              href="https://wa.me/5569981175481?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 md:px-10 py-3 md:py-4 text-xl md:text-3xl text-white rounded-3xl bg-blue-500 hover:bg-blue-600 transition duration-600 hover:scale-125 "
            >
              SAIBA MAIS
            </Link>

          </div>

          <div className="w-1/2 h-full flex items-center justify-center mt-4">

            <Image src="/mascote2.png" alt="logo" width={600} height={100} />

          </div>

        </div>

      </section>

    </div>
  );
}
