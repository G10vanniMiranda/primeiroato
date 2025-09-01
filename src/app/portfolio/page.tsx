
import Link from "next/link";

export default function Portfolio() {
    const services = [
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

    const projetos = [
        {
            nome: "SS Contabilidade",
            imagem: "/logo_ss.png",
            descricao: "Site moderno para escritório de contabilidade, com área de artigos e chatbot de atendimento.",
            link: "https://contabilidadess.com.br"
        },
    ];

    return (
        <main className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-12 px-2">

            <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Nosso Portfólio</h1>

            {/* Cards de Serviços */}
            <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-start cursor-pointer hover:-translate-y-1 border border-transparent hover:border-blue-500"
                    >
                        <h2 className="text-xl font-bold mb-2 text-blue-700">{service.title}</h2>
                        <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                ))}
            </section>


            {/* Cards de Projetos */}
            <section className="w-full max-w-6xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Projetos Realizados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projetos.map((projeto, idx) => (
                        <Link
                            key={idx}
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center hover:-translate-y-1 border border-transparent hover:border-blue-500 cursor-pointer"
                        >
                            <img
                                src={projeto.imagem}
                                alt={projeto.nome}
                                className="w-32 h-32 object-contain rounded-lg mb-4 bg-gray-50"
                            />
                            <h3 className="text-lg font-bold mb-2">{projeto.nome}</h3>
                            <p className="text-gray-500 text-sm text-center">{projeto.descricao}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}