
import Image from "next/image";
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Sobre() {
    return (
        <div className="w-full h-auto p-4 bg-gray-200 flex flex-col md:flex-row items-center justify-center gap-8 py-10">

            <div className="w-96 h-auto flex flex-col items-center justify-center gap-6">
                <h1 className="text-2xl font-bold">Projetos de sucesso</h1>
                <p className="">
                    * Empresas que adotam o marketing digital de forma estratégica estão acelerando o crescimento, reduzindo custos comerciais e aumentando a previsibilidade de vendas.
                    <br />
                    * Quem entra com estratégia, colhe crescimento de verdade.
                    <br />
                    * O digital não é gasto — é investimento com retorno comprovado.
                </p>
            </div>

            <Carousel
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto h-80 flex items-center justify-center p-2 rounded-xl"
            >
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src="/logo_bio.png"
                            alt="Projeto 1"
                            width={400}
                            height={300}
                            className="object-contain w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg bg-white"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/logo_ibe.png"
                            alt="Projeto 2"
                            width={400}
                            height={300}
                            className="object-contain w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg bg-white"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/logo_mn.png"
                            alt="Projeto 3"
                            width={400}
                            height={300}
                            className="object-contain w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg bg-white"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/logo_ss.png"
                            alt="Projeto 4"
                            width={400}
                            height={300}
                            className="object-contain w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg bg-white"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div>
                <Image
                    src="/mascote6.png"
                    alt="Projeto 1"
                    width={400}
                    height={300}
                    className="object-contain w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg bg-white"
                />
            </div>
        </div>
    );
}
