"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Waves,
  MessageCircle,
  Facebook,
  Instagram,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Ship,
  MapPin,
  Trees,
  LandPlot,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { AnimatedCounter } from "@/components/animated-counter"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Componente para a nova seção de depoimentos
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana e Carlos Silva",
      title: "Compradores do Lote 24",
      avatar: "/placeholder.svg?width=100&height=100",
      rating: 5,
      quote:
        "O processo foi transparente e a equipe nos ajudou em cada passo. Mal podemos esperar para construir nossa casa de praia e acordar com o som do mar. Um sonho se tornando realidade!",
    },
    {
      name: "Marcos Rocha",
      title: "Investidor",
      avatar: "/placeholder.svg?width=100&height=100",
      rating: 5,
      quote:
        "Investi no Terra Vista pelo incrível potencial de valorização da região. A localização é estratégica e o projeto é muito bem planejado. Sem dúvida, um dos melhores investimentos que já fiz.",
    },
    {
      name: "Juliana Pereira",
      title: "Futura Moradora",
      avatar: "/placeholder.svg?width=100&height=100",
      rating: 5,
      quote:
        "Fiquei impressionada com a beleza natural ao redor do loteamento. Ter uma trilha ecológica e um lago tão perto de casa é um privilégio. A qualidade de vida que teremos aqui não tem preço.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 mt-2">A satisfação de quem já garantiu seu pedaço de paraíso.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                </div>
                <blockquote className="text-gray-600 border-l-4 border-green-200 pl-4 italic">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TerraVistaLandingPage() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()

  const videoSrc = isMobile ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terra-vista-video-mobile.mp4-25DlKIlTsNnzCdVkxRlzVRtTjP6yue.mp4" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terra-vista-video-desktop.mp4-QstEROpoXj6TPB5TyvVoliOmUjm4v1.mp4"

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Botão Fixo WhatsApp */}
      <Link
        href="https://wa.me/5573000000000"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center gap-2"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline font-semibold">Fale no WhatsApp</span>
      </Link>

      {/* 1. Cabeçalho Fixo */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-terra-vista.png"
              alt="Logo Terra Vista"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#sobre" className="hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="#vantagens" className="hover:text-blue-600 transition-colors">
              Vantagens
            </Link>
            <Link href="#fotos" className="hover:text-blue-600 transition-colors">
              Fotos
            </Link>
            <Link href="#localizacao" className="hover:text-blue-600 transition-colors">
              Localização
            </Link>
            <Link href="#contato" className="hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white">Agendar Visita</Button>
        </div>
      </header>

      <main>
        {/* 2. Seção Hero */}
        <section
          id="sobre"
          className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden"
        >
          <video
            key={videoSrc}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative z-20 container px-4 flex flex-col items-center space-y-6 max-w-4xl animate-in fade-in duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance drop-shadow-md animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
              Acorde com o som do mar a 800 metros da sua casa
            </h1>
            <p className="text-lg md:text-xl font-light text-balance animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
              Você pode morar pertinho da praia investindo menos de R$16 por dia
            </p>
            <Link href="#contato" passHref>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-6 mt-4 rounded-full transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700"
              >
                {"Ver Lotes Disponíveis Agora "}
              </Button>
            </Link>
            <button
              onClick={toggleMute}
              className="flex md:hidden items-center gap-2 mt-8 text-white/90 hover:text-white transition-colors"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? "🔇" : "🔈"}
              <span className="text-sm font-medium">{isMuted ? "Ativar som" : "Desativar som"}</span>
            </button>
          </div>
          <button
            onClick={toggleMute}
            className="hidden md:block absolute bottom-5 right-5 z-20 bg-black/30 backdrop-blur-sm text-2xl p-2 rounded-full hover:bg-black/50 transition-colors"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? "🔇" : "🔈"}
          </button>
        </section>

        {/* 3. Subheadline */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto">
              Seu pedaço de paraíso com{" "}
              <span className="font-semibold text-green-600">trilha ecológica, lago, praça</span> e fácil acesso.
            </h2>
            <TypewriterEffect
              text=" Saia na frente e garanta seu lote com condições exclusivas de lançamento."
              className="mt-4 text-lg text-gray-600 min-h-[112px] md:min-h-[56px]"
            />
          </div>
        </section>

        {/* Seção de Prova Social com Contadores */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <LandPlot className="h-10 w-10 text-green-600" />
                <p className="text-4xl font-bold text-blue-900">
                  <AnimatedCounter target={40} prefix="+ de " />
                </p>
                <h3 className="font-semibold text-gray-600">Lotes Reservados</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-10 w-10 text-green-600" />
                <p className="text-4xl font-bold text-blue-900">
                  <AnimatedCounter target={800} suffix="m" />
                </p>
                <h3 className="font-semibold text-gray-600">da Praia</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Trees className="h-10 w-10 text-green-600" />
                <p className="text-4xl font-bold text-blue-900">
                  <AnimatedCounter target={12000} suffix="m²" />
                </p>
                <h3 className="font-semibold text-gray-600">de Área Verde</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Seção com Vantagens */}
        <section id="vantagens" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Vantagens de investir no Terra Vista</h2>
              <p className="text-lg text-gray-600 mt-2">Tudo que você precisa para viver bem está aqui.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-100 p-4 rounded-full">
                  <Waves className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Natureza e Mar</h3>
                <p className="text-sm text-gray-600">A 800m da praia, cercado por verde e ar puro.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-100 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Alta Valorização</h3>
                <p className="text-sm text-gray-600">Invista em uma região com grande potencial de crescimento.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-100 p-4 rounded-full">
                  <Wallet className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Parcelas Acessíveis</h3>
                <p className="text-sm text-gray-600">Condições de lançamento que cabem no seu bolso.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-100 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Segurança Jurídica</h3>
                <p className="text-sm text-gray-600">Lotes em área registrada e com matrícula. </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-100 p-4 rounded-full">
                  <Ship className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Futuro Parque Aquático</h3>
                <p className="text-sm text-gray-600">Próximo a um grande projeto de lazer e turismo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção do Vídeo 3D */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Visualize seu futuro no Terra Vista</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Veja o que você pode adquirir com parcelas a partir de{" "}
              <span className="font-bold text-green-600">R$ 380,00 por mês.</span>
            </p>
            <div className="mt-8 max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dKco50LUXOI?si=g_ep7hTE68yCRDnI&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Integração com Spotify */}
        <section
          className="relative py-20 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/praia-lounge.jpg')" }}
        >
          <div className="absolute inset-0 bg-gray-900/80 z-10" />
          <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold">🎵 Aperte o play e sinta o clima do Terra Vista</h2>
            <p className="mt-2 text-lg text-gray-300">Playlist inspirada nas praias de Alcobaça.</p>
            <div className="mt-8 w-full max-w-3xl">
              <div className="relative">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/1ObH7TadmX2qtpOJX4bQHe?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Playlist Terra Vista"
                  onError={(e) => {
                    console.log("Erro ao carregar Spotify embed:", e)
                    e.currentTarget.style.display = "none"
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = "block"
                  }}
                ></iframe>
                <div style={{ display: "none" }} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <p className="text-white mb-4">🎵 Playlist temporariamente indisponível</p>
                  <a
                    href="https://open.spotify.com/playlist/1ObH7TadmX2qtpOJX4bQHe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors"
                  >
                    Abrir no Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de fotos */}
        <section id="fotos" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-12">Galeria de Fotos</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[
                  { src: "/praia-do-farol.jpg", alt: "Vista aérea da Praia do Farol em Alcobaça" },
                  { src: "/barra-do-cahy.jpg", alt: "Encontro do rio com o mar na Barra do Cahy" },
                  { src: "/mapa-costa-descobrimento.jpg", alt: "Mapa da Costa do Descobrimento" },
                  { src: "/placeholder.svg?width=1200&height=800", alt: "Trilha ecológica" },
                  { src: "/placeholder.svg?width=1200&height=800", alt: "Lagoa do loteamento" },
                  { src: "/placeholder.svg?width=1200&height=800", alt: "Vista dos lotes" },
                  { src: "/placeholder.svg?width=1200&height=800", alt: "Rua interna do loteamento" },
                  { src: "/placeholder.svg?width=1200&height=800", alt: "Pôr do sol na praia de Alcobaça" },
                ].map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-0">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={1200}
                          height={800}
                          className="rounded-lg object-cover aspect-[3/2]"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          </div>
        </section>

        {/* Mapa interativo */}
        <section id="localizacao" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Localização Privilegiada</h2>
            <p className="text-gray-600 mb-8">
              A 800 metros do mar, com fácil acesso e perto de tudo que você precisa.
            </p>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31007.99832919934!2d-39.22805565!3d-17.5166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x734f6193ff3b1a3%3A0x87c58644952d2841!2sAlcoba%C3%A7a%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1678886666666!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* NOVA Seção de Depoimentos */}
        <TestimonialsSection />

        {/* Formulário de interesse */}
        <section id="contato" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-8 shadow-2xl bg-white">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-3xl font-bold">Simulação direto com a incorporadora</h2>
                <p className="text-gray-600">Preencha seu nome e WhatsApp e fale direto com um consultor.</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" className="py-6" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="sr-only">
                    WhatsApp
                  </label>
                  <Input id="whatsapp" placeholder="Seu WhatsApp com DDD" className="py-6" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  Quero Saber Mais
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h3 className="text-lg font-semibold">Medina Empreendimentos</h3>
              <p className="text-sm text-gray-400">CNPJ: 41.869.000/0001-00</p>
              <p className="text-sm text-gray-400">Realizando sonhos, construindo futuros.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Loteamento Terra Vista. Todos os direitos reservados.</p>
            <Link href="#" className="underline hover:text-white">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
