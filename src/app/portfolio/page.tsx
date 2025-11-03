import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nosso Portfólio | Primeiro Ato",
    description:
        "Conheça nosso portfólio: criação de sites, videomaker, gestão de tráfego pago, identidade visual e social media. Projetos pensados para performance.",
    keywords: [
        "portfólio",
        "criação de sites",
        "videomaker",
        "tráfego pago",
        "identidade visual",
        "social media",
        "agência digital",
    ],
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Portfólio | Primeiro Ato",
        description:
            "Veja nossos projetos e serviços: sites, vídeos, tráfego pago, identidade visual e social media.",
        url: "/portfolio",
        type: "website",
        siteName: "Primeiro Ato",
        images: [
            { url: "/og-portfolio.png", width: 1200, height: 630, alt: "Portfólio Primeiro Ato" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfólio | Primeiro Ato",
        description:
            "Conheça nossos projetos e serviços com foco em performance e crescimento.",
        images: ["/og-portfolio.png"],
    },
};

type Service = { title: string; description: string };
type Project = { nome: string; imagem: string; descricao: string; link: string };

export default function Portfolio() {
    const services: Service[] = [
        {
            title: "Criação de Sites",
            description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão, com foco em performance e experiência do usuário.",
        },
        {
            title: "Conteúdos Criados com Videomaker",
            description: "Produção de vídeos profissionais para redes sociais, campanhas e branding, destacando sua marca de forma criativa.",
        },
        {
            title: "Gestão de Tráfego Pago",
            description: "Planejamento, execução e otimização de campanhas pagas para gerar resultados reais e previsíveis para o seu negócio.",
        },
        {
            title: "Identidade Visual",
            description: "Criação de logotipos, paleta de cores e materiais gráficos que transmitem a essência e os valores da sua marca.",
        },
        {
            title: "Social Media",
            description: "Gestão estratégica de redes sociais, com conteúdo relevante, engajamento e crescimento de audiência.",
        },
    ];

    const projetos: Project[] = [
        {
            nome: "SS Contabilidade",
            imagem: "/logo_ss.png",
            descricao: "Site moderno para escritório de contabilidade, com área de artigos e chatbot de atendimento.",
            link: "https://contabilidadess.com.br"
        },
    ];

    return (
        <main className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-12 px-2 pt-24 md:pt-32" role="main">

            <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Nosso Portfólio</h1>

            {/* Cards de Serviços */}
            <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" aria-labelledby="servicos-heading">
                <h2 id="servicos-heading" className="sr-only">Serviços</h2>
                {services.map((service, idx) => (
                    <article
                        key={idx}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start focus-within:ring-2 focus-within:ring-blue-500 border border-transparent hover:border-blue-500 hover:-translate-y-1"
                        aria-label={service.title}
                    >
                        <h3 className="text-xl font-bold mb-2 text-blue-700">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </article>
                ))}
            </section>


            {/* Cards de Projetos */}
            <section className="w-full max-w-6xl" aria-labelledby="projetos-heading">
                <h2 id="projetos-heading" className="text-2xl font-bold mb-6 text-center">Projetos Realizados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projetos.map((projeto, idx) => (
                        <Link
                            key={idx}
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center hover:-translate-y-1 border border-transparent hover:border-blue-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={`Abrir site do projeto ${projeto.nome}`}
                        >
                            <Image
                                src={projeto.imagem}
                                alt={projeto.nome}
                                width={256}
                                height={256}
                                sizes="(max-width: 640px) 8rem, (max-width: 1024px) 8rem, 8rem"
                                className="w-32 h-32 object-contain rounded-lg mb-4 bg-gray-50"
                                priority={false}
                            />
                            <h3 className="text-lg font-bold mb-2">{projeto.nome}</h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">{projeto.descricao}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "CollectionPage",
                  name: "Portfólio - Primeiro Ato",
                  description:
                    "Portfólio de projetos e serviços: sites, vídeos, tráfego pago, identidade visual e social media.",
                  url: "https://seu-dominio.com/portfolio",
                  hasPart: projetos.map((p) => ({
                    "@type": "CreativeWork",
                    name: p.nome,
                    url: p.link,
                    image: p.imagem,
                    description: p.descricao,
                  })),
                }),
              }}
            />
        </main>
    );
}