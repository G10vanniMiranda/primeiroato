import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GoChevronRight } from "react-icons/go";

export const metadata: Metadata = {
    title: "Serviços e Planos | Primeiro Ato",
    description:
        "Conheça nossos serviços e planos: social media, vídeos, sites, tráfego pago e soluções sob medida para o seu negócio.",
    alternates: { canonical: "/servico" },
};

type Plano = {
    nome: string;
    preco: string;
    corClasse: string; // classes de borda (tailwind)
    itens: string[];
};

const planos: Plano[] = [
    {
        nome: "Plano 1",
        preco: "R$ 1.000,00",
        corClasse: "border-b-gray-500 border-r-gray-500",
        itens: [
            "04 Artes gráficas personalizadas.",
            "01 vídeo curto com roteiro incluído.",
            "01 Landing Page Inicial",
            "01 Setup de Campanha",
        ],
    },
    {
        nome: "Plano 2",
        preco: "R$ 2.000,00",
        corClasse: "border-b-red-500 border-r-red-500",
        itens: [
            "06 Artes gráficas personalizadas.",
            "03 vídeos curtos com roteiro incluído.",
            "01 Landing Page Inicial",
            "01 Setup de Campanha",
        ],
    },
    {
        nome: "Plano 3",
        preco: "R$ 2.500,00",
        corClasse: "border-b-yellow-500 border-r-yellow-500",
        itens: [
            "08 Artes gráficas personalizadas.",
            "04 vídeos curtos com roteiro incluído.",
            "01 Landing Page Inicial",
            "01 Setup de Campanha",
        ],
    },
    {
        nome: "Plano 4",
        preco: "R$ 3.500,00",
        corClasse: "border-b-purple-500 border-r-purple-500",
        itens: [
            "13 Artes gráficas personalizadas.",
            "06 vídeos curtos com roteiros incluídos.",
            "01 Landing Page Inicial.",
            "01 Setup de Campanha.",
            "Gestão de Tráfego Pago.",
            "01 Site Profissional.",
            "Campanhas mensais otimizadas.",
            "Integrações com WhatsApp ou Email Marketing.",
            "Consultoria estratégica Quinzenal.",
        ],
    },
    {
        nome: "Plano 5",
        preco: "R$ 6.000,00",
        corClasse: "border-b-green-500 border-r-green-500",
        itens: [
            "20 Artes gráficas personalizadas.",
            "08 vídeos curtos com roteiros incluídos.",
            "03 Landing Page Inicial.",
            "01 Setup de Campanha.",
            "Gestão de Tráfego Pago.",
            "01 Site Profissional.",
            "Campanhas mensais otimizadas.",
            "Integrações com WhatsApp ou Email Marketing.",
            "Consultoria estratégica Quinzenal.",
        ],
    },
];

export default function Servico() {
    return (
        <main className="min-h-screen w-full bg-black flex flex-col items-center justify-start py-16 px-4">
            <header className="max-w-6xl w-full text-center mb-10">
                <h1 className="uppercase font-bold text-3xl text-white">Serviços e Planos</h1>
                <p className="text-gray-300 mt-2">
                    Escolha o plano ideal ou fale com a gente para montar uma solução sob medida.
                </p>
            </header>

            <section
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                aria-labelledby="planos-heading"
            >
                <h2 id="planos-heading" className="sr-only">Planos disponíveis</h2>

                {planos.map((plano) => (
                    <article
                        key={plano.nome}
                        className={`w-full h-auto flex flex-col items-center justify-between gap-4 border-b-2 border-r-2 ${plano.corClasse} rounded-2xl p-4 bg-black/40 backdrop-blur-sm`}
                        aria-label={plano.nome}
                    >
                        <ul className="flex justify-center flex-col text-white gap-2">
                            {plano.itens.map((item, i) => (
                                <li key={i} className="flex gap-2 justify-center items-start">
                                    <GoChevronRight color="rgb(34 197 94)" size={20} />
                                    <span className="text-center">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold" aria-label={`Preço ${plano.preco}`}>
                            <span className={
                                plano.corClasse.includes("red")
                                    ? "text-red-400"
                                    : plano.corClasse.includes("yellow")
                                    ? "text-yellow-400"
                                    : plano.corClasse.includes("green")
                                    ? "text-green-400"
                                    : plano.corClasse.includes("purple")
                                    ? "text-fuchsia-500"
                                    : "text-gray-400"
                            }>
                                {plano.preco}
                            </span>
                        </h3>

                        <div className="text-white flex flex-col items-center font-semibold">
                            <p>Compromisso mínimo: 3</p>
                            <p>meses de contrato</p>
                        </div>

                        <Link
                            href="https://wa.me/5569981175481?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-gray-400 text-white px-4 py-2 rounded-full mt-2 tracking-wider hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={`Solicitar orçamento do ${plano.nome} pelo WhatsApp`}
                        >
                            SAIBA MAIS
                        </Link>
                    </article>
                ))}

                {/* Plano Personalizado */}
                <article className="w-full h-auto flex flex-col items-center justify-center gap-4 border-b-2 border-r-2 border-b-purple-500 border-r-purple-500 rounded-2xl p-4 bg-black/40 backdrop-blur-sm">
                    <div className="text-white flex flex-col items-center font-semibold p-2 max-w-xs">
                        <h3 className="text-3xl text-left font-bold">
                            Montar meu plano de acordo com a minha necessidade.
                        </h3>
                    </div>

                    <Link
                        href="https://wa.me/5569981175481?text=Ol%C3%A1%2C%20gostaria%20de%20um%20plano%20personalizado."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-purple-500 text-white px-4 py-2 rounded-full mt-2 tracking-wider hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Solicitar plano personalizado pelo WhatsApp"
                    >
                        MONTAR MEU PLANO
                    </Link>
                </article>
            </section>

            <footer className="max-w-6xl w-full text-center mt-12">
                <p className="text-gray-400 text-sm">Valores sujeitos a alteração sem aviso prévio.</p>
            </footer>
        </main>
    );
}
