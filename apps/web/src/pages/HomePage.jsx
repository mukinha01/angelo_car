import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ScanLine,
  Disc3,
  Waves,
  Fuel,
  Settings2,
  Wrench,
  Droplets,
  RefreshCw,
  Target,
  UserCheck,
  ShieldCheck,
  Eye,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Music2,
  MessageCircle,
  Send,
  X,
  Quote,
  ArrowUpRight,
  Mail,
  CreditCard,
  WalletCards,
  ClipboardCheck,
  Banknote,
  QrCode,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { contato, mensagemWhatsApp, whatsappLink } from '@/data/siteConfig';

const marcas = ['Volkswagen', 'Mercedes-Benz', 'BMW', 'Audi'];
const mediaPath = (fileName) => `${import.meta.env.BASE_URL}media/${fileName}`;

const servicos = [
  { icon: Fuel, t: 'Injeção Eletrônica', d: 'Diagnóstico e correção do sistema de injeção para máxima eficiência.' },
  { icon: RefreshCw, t: 'Embreagem', d: 'Troca e regulagem de embreagens com peças de alta qualidade.' },
  { icon: Disc3, t: 'Freio e Suspensão', d: 'Discos, pastilhas e sistemas de suspensão revisados com precisão.' },
  { icon: Wrench, t: 'Mecânica Geral', d: 'Intervenções completas em motores e sistemas mecânicos.' },
  { icon: Droplets, t: 'Troca de Óleo', d: 'Troca com óleos adequados às especificações do seu veículo.' },
  { icon: Settings2, t: 'Geometria das Rodas', d: 'Alinhamento 3D e balanceamento para mais estabilidade, segurança e precisão.' },
  { icon: ScanLine, t: 'Diagnóstico Computadorizado', d: 'Leitura eletrônica completa de módulos e sensores.' },
  { icon: ClipboardCheck, t: 'Revisão Preventiva', d: 'Inspeção completa para antecipar necessidades e manter seu veículo seguro.' },
];

const diferenciais = [
  { icon: Target, t: 'Diagnóstico preciso', d: 'Utilizamos tecnologia de ponta para identificar a real necessidade do seu veículo.' },
  { icon: UserCheck, t: 'Atendimento personalizado', d: 'Cada cliente recebe uma abordagem individual, transparente e profissional.' },
  { icon: ShieldCheck, t: 'Garantia de 3 meses', d: 'Todos os serviços possuem garantia de 3 meses, assegurando qualidade e confiança.' },
  { icon: Eye, t: 'Transparência total', d: 'Explicamos cada serviço necessário antes da execução, sem surpresas no orçamento.' },
];

const formasPagamento = [
  { icon: WalletCards, t: 'Débito', d: 'Pagamento no cartão' },
  { icon: CreditCard, t: 'Crédito', d: 'Até 6x sem juros' },
  { icon: QrCode, t: 'PIX', d: 'Prático e instantâneo' },
  { icon: Banknote, t: 'Dinheiro', d: 'Pagamento à vista' },
];

const destaquesSobre = [
  'Especialistas em carros alemães',
  'Diagnóstico preciso',
  'Garantia de 3 meses em todos os serviços',
  'Transparência nos serviços',
  'Equipe especializada e qualificada',
  'Qualidade e segurança',
];

const depoimentos = [
  {
    texto: 'A melhor oficina da região.',
    autor: 'Feedback real de cliente',
    veiculo: 'Angelo Car Center',
    imagem: mediaPath('feedback-cliente.jpeg'),
  },
];

const galeria = [
  { src: mediaPath('oficina-ampla.jpeg'), alt: 'Audi e BMW em atendimento dentro da oficina', span: 'md:col-span-2 md:row-span-2' },
  { src: mediaPath('elevador-car.jpeg'), alt: 'BMW em manutenção no elevador', span: '' },
  { src: mediaPath('caminhonete-elevador.jpg'), alt: 'Caminhonete e SUV em atendimento no elevador', span: '' },
  { src: mediaPath('oficina-carros.jpeg'), alt: 'Veículos Audi e BMW em manutenção', span: 'md:col-span-2' },
  { src: mediaPath('entrada-angelo-car.jpeg'), alt: 'Entrada da Angelo Car Center com veículos em atendimento', span: '' },
  { src: mediaPath('fachada-angelo-car.jpeg'), alt: 'Fachada da Angelo Car Center durante o dia', span: '' },
  { src: mediaPath('entrada-loja-noite.jpeg'), alt: 'Entrada da Angelo Car Center iluminada à noite', span: '' },
];

const videos = [
  { src: mediaPath('audi-a6-troca-de-rolamento-angelo-car.mp4'), title: 'Atendimento técnico em Audi A6' },
  { src: mediaPath('audiq8-video.mp4'), title: 'Audi Q8 em atendimento' },
  { src: mediaPath('range-rover-velar-alinhamento-e-balanceamento.mp4'), title: 'Alinhamento e balanceamento em Range Rover Velar' },
  { src: mediaPath('audi-a3-limpezaCompleta-descarbonização.mp4'), title: 'Limpeza e descarbonização em Audi A3' },
  { src: mediaPath('bmw-3201-troca-de-oleo.mp4'), title: 'Troca de óleo em BMW 320i' },
  { src: mediaPath('video-angelo-car.mp4'), title: 'Rotina de atendimento na oficina' },
  { src: mediaPath('video2-angelo-car.mp4'), title: 'Estrutura e veículos em manutenção' },
  { src: mediaPath('video-troca-de-oleo.mp4'), title: 'Troca de óleo e revisão preventiva' },
  { src: mediaPath('video-troca-oleo.mp4'), title: 'Serviço de troca de óleo' },
];

const historiaImages = [
  {
    src: mediaPath('WhatsApp Image 2026-08-10 at 16.50.49.jpeg'),
    alt: 'Foto do Angelo em atendimento na oficina',
  },
  {
    src: mediaPath('WhatsApp Image 2026-08-10 at 16.50.49 (1).jpeg'),
    alt: 'Foto do Angelo e da equipe durante o trabalho',
  },
  {
    src: mediaPath('entrada-angelo-car.jpeg'),
    alt: 'Entrada da Angelo Car Center com veículos em atendimento',
  },
  {
    src: mediaPath('fachada-angelo-car.jpeg'),
    alt: 'Fachada da Angelo Car Center durante o dia',
  },
];

const logoSrc = mediaPath('angelo-car-logo.png');
const logoWithNameSrc = mediaPath('angelo-car-logo-name.png');

const Btn = ({ href, children, variant = 'solid', className = '', ...rest }) => {
  const base =
    'inline-flex items-center justify-center gap-2 min-h-[48px] rounded-md px-7 text-[0.82rem] font-semibold uppercase tracking-[0.16em] transition-all duration-200 active:scale-[0.98]';
  const styles =
    variant === 'solid'
      ? 'bg-primary text-primary-foreground hover:bg-[hsl(0_72%_36%)] shadow-[0_10px_30px_-12px_hsl(0_72%_42%/0.7)]'
      : 'border border-white/25 text-foreground hover:border-primary hover:text-primary';
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  );
};

const Eyebrow = ({ children }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-10 bg-primary" />
    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">{children}</span>
  </div>
);

export default function HomePage() {
  const [showLoader, setShowLoader] = React.useState(true);
  const [loaderExiting, setLoaderExiting] = React.useState(false);
  const [playingVideo, setPlayingVideo] = React.useState(null);
  const [showAllVideos, setShowAllVideos] = React.useState(false);
  const [whatsappOpen, setWhatsappOpen] = React.useState(false);
  const [whatsappMessage, setWhatsappMessage] = React.useState(mensagemWhatsApp);
  const videoRefs = React.useRef([]);
  const videoVolumes = React.useRef([]);
  const fadingVideo = React.useRef(null);
  const fadeToken = React.useRef(0);
  const suppressPauseFade = React.useRef(false);

  React.useEffect(() => {
    const exitTimer = window.setTimeout(() => setLoaderExiting(true), 800);
    const removeTimer = window.setTimeout(() => setShowLoader(false), 1400);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  const fadeOutAndPause = (videoElement) => {
    if (!videoElement || fadingVideo.current === videoElement) return;

    fadingVideo.current = videoElement;
    const currentFadeToken = ++fadeToken.current;
    const originalVolume = videoElement.volume;
    videoVolumes.current[videoRefs.current.indexOf(videoElement)] = originalVolume;
    const fadeStartedAt = performance.now();
    const fadeDuration = 260;

    const finishFade = () => {
      videoElement.volume = 0;
      fadingVideo.current = null;
    };

    const fadeAudio = (now) => {
      if (currentFadeToken !== fadeToken.current) return;
      const progress = Math.min((now - fadeStartedAt) / fadeDuration, 1);
      videoElement.volume = originalVolume * (1 - progress);
      if (progress < 1) {
        window.requestAnimationFrame(fadeAudio);
      } else {
        finishFade();
      }
    };

    window.requestAnimationFrame(fadeAudio);
  };

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();
    const message = whatsappMessage.trim() || mensagemWhatsApp;
    const chatUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(chatUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showLoader && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(0_0%_4%)] transition-opacity duration-700 ease-out ${
            loaderExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          role="status"
          aria-label="Carregando Angelo Car Center"
        >
          <div className="flex flex-col items-center gap-6 px-8">
            <img
              src={logoWithNameSrc}
              alt="Angelo Car Center"
              className="w-56 animate-pulse object-contain sm:w-64"
            />
            <span className="h-px w-16 bg-primary" />
          </div>
        </div>
      )}
      <Helmet>
        <title>Angelo Car Center | Oficina Especializada em Carros Alemães — Vargem Grande Paulista</title>
        <meta
          name="description"
          content="Angelo Car Center — especializada em Volkswagen, Mercedes-Benz, BMW e Audi em Vargem Grande Paulista. Injeção eletrônica, câmbio técnico, freios, suspensão e diagnóstico computadorizado. Garantia de 3 meses."
        />
        <meta
          name="keywords"
          content="Angelo Car Center, mecânica carros alemães, oficina Volkswagen, BMW, Mercedes-Benz, Audi, Vargem Grande Paulista, diagnóstico computadorizado, câmbio técnico, injeção eletrônica"
        />
      </Helmet>
      <Seo
        title="Angelo Car Center | Especialistas em Carros Alemães"
        description="Oficina especializada em Volkswagen, Mercedes-Benz, BMW e Audi. Diagnóstico computadorizado, câmbio técnico, freios e suspensão. Garantia de 3 meses em todos os serviços."
        image={mediaPath('oficina-ampla.jpeg')}
        siteName="Angelo Car Center"
      />

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Angelo Car Center logo"
              className="h-9 w-auto"
            />
            <span className="font-display text-base font-bold uppercase tracking-[0.1em] hidden sm:block">
              Angelo <span className="text-primary">Car Center</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 justify-self-center text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#diferenciais" className="transition-colors hover:text-foreground">Diferenciais</a>
            <a href="#galeria" className="transition-colors hover:text-foreground">Galeria</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <Btn href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden justify-self-end px-5 sm:inline-flex">
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} /> WhatsApp
          </Btn>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="relative flex min-h-[100dvh] items-end overflow-hidden">
        <img
          src={mediaPath('oficina-ampla.jpeg')}
          alt="Audi e BMW em atendimento dentro da oficina Angelo Car Center"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Eyebrow>Todos os veículos, com especialização em Volkswagen, BMW, Mercedes-Benz e Audi</Eyebrow>
            <h1 className="font-display text-[2.6rem] font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Excelência mecânica para carros que{' '}
              <span className="relative inline-block text-primary">
                exigem o melhor
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-primary/70" />
              </span>
              .
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              A Angelo Car Center oferece diagnóstico preciso, atendimento especializado e garantia de 3 meses
              em todos os serviços para veículos de todos os tipos, com especialização em carros alemães.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Btn href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar avaliação</Btn>
              <Btn href={`tel:${contato.telefoneLink}`} variant="ghost">
                <Phone className="h-4 w-4" strokeWidth={1.8} /> {contato.telefone}
              </Btn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE MARCAS */}
      <div className="overflow-hidden border-y border-white/10 bg-[hsl(0_0%_6%)] py-4">
        <div className="marquee-track flex w-max items-center gap-12 pr-12">
          {[...marcas, ...marcas, ...marcas, ...marcas, ...marcas, ...marcas].map((m, i) => (
            <span
              key={i}
              className="font-display flex shrink-0 items-center gap-12 text-sm font-semibold uppercase tracking-[0.3em] text-white/40"
            >
              {m}
              <span className="h-1 w-1 bg-primary" />
            </span>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="mb-6 flex items-center gap-5">
              <img
                src={mediaPath('oficina-carros.jpeg')}
                alt="Veículos em atendimento dentro da Angelo Car Center"
                className="h-24 w-full max-w-sm object-cover object-center"
              />
            </div>
            <Eyebrow>Sobre a Angelo Car Center</Eyebrow>
            <h2 className="font-display text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.9rem]">
              Seu carro merece mais do que uma oficina. Merece <span className="text-primary">especialistas</span>.
            </h2>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              A Angelo Car Center atende veículos de todos os tipos em Vargem Grande Paulista, com
              especialização em Volkswagen, Mercedes-Benz, BMW e Audi. Trabalhamos com foco em precisão,
              transparência e excelência, garantindo que cada serviço seja executado com o mais alto padrão técnico.
            </p>
            <p className="font-display mt-9 border-l-2 border-primary pl-5 text-xl font-semibold uppercase tracking-wide">
              Garantia de 3 meses em todos os serviços.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {destaquesSobre.map((d) => (
                <div key={d} className="group flex items-center justify-between gap-4 py-5">
                  <span className="text-[0.95rem] font-medium text-white/85">{d}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="mb-6 flex items-center gap-5">
              <img
                src={mediaPath('logo-angelo-car-completa.png')}
                alt="Logo completo Angelo Car Center"
                className="h-20 w-full max-w-xs object-contain object-left"
              />
            </div>
            <Eyebrow>História da Angelo Car</Eyebrow>
            <h2 className="font-display text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.9rem]">
              Da garagem aos carros premium: uma trajetória movida por <span className="text-primary">trabalho</span> e <span className="text-primary">confiança</span>.
            </h2>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Tudo começou em 2012, com um sonho, muito trabalho e a vontade de construir algo que fosse além de uma simples oficina.
            </p>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Comecei em um espaço pequeno e com uma estrutura bastante simples. Naquele momento, eu ainda não imaginava até onde esse projeto poderia chegar. Mas desde o início, uma coisa sempre esteve presente: o compromisso de fazer um trabalho bem feito e entregar aos meus clientes confiança, qualidade e segurança.
            </p>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Com o passar dos anos, a oficina cresceu e novos desafios surgiram. Vieram as mudanças de endereço, espaços maiores e uma estrutura cada vez mais completa, até chegarmos ao nosso atual galpão, onde conseguimos reunir tecnologia, organização e equipamentos de alto nível.
            </p>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-[hsl(0_0%_10%)] p-8 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold text-white/90">
                Investimos constantemente em novas máquinas, ferramentas e diagnósticos para acompanhar a evolução do mercado e cuidar dos veículos mais modernos e exigentes.
              </p>
            </div>
            <p className="mt-10 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Foi nesse processo que construímos nossa especialização em veículos premium, com forte experiência nas principais marcas alemãs, como Audi, Volkswagen, BMW e Mercedes-Benz.
            </p>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Hoje, quando olho para tudo o que construí desde 2012, vejo muito mais do que uma oficina. Vejo anos de trabalho, aprendizado, evolução e, principalmente, a confiança de cada cliente que fez parte dessa trajetória.
            </p>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              O espaço mudou. A tecnologia mudou. Os carros mudaram.
            </p>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Mas uma coisa permanece a mesma desde o primeiro dia: a vontade de entregar sempre o melhor.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Essa é a nossa história. E ela continua sendo escrita todos os dias.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {historiaImages.map((image) => (
              <Reveal key={image.src}>
                <div className="overflow-hidden rounded-[2rem] bg-[hsl(0_0%_8%)] shadow-[0_25px_80px_-35px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="border-y border-white/10 bg-[hsl(0_0%_6%)]">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="font-display max-w-2xl text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.8rem]">
              Serviço técnico completo para todos os tipos de veículos.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((s, i) => (
              <Reveal key={s.t} delay={(i % 4) * 0.05}>
                <div className="group relative h-full bg-[hsl(0_0%_7%)] p-7 transition-colors duration-300 hover:bg-[hsl(0_0%_9%)]">
                  <span className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="font-display mt-6 text-lg font-semibold uppercase leading-tight">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Eyebrow>Diferenciais</Eyebrow>
          <h2 className="font-display max-w-2xl text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.9rem]">
            Precisão, confiança e excelência em <span className="text-primary">cada detalhe</span>.
          </h2>
        </Reveal>
        <div className="mt-14 space-y-px bg-white/10">
          {diferenciais.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.06}>
              <div className="group grid gap-4 bg-background p-7 transition-colors duration-300 hover:bg-[hsl(0_0%_7%)] sm:grid-cols-[4rem_1fr_1.4fr] sm:items-center sm:gap-8">
                <span className="font-display text-2xl font-bold text-primary/60">0{i + 1}</span>
                <h3 className="font-display text-xl font-semibold uppercase">{d.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FORMAS DE PAGAMENTO */}
        <Reveal delay={0.1}>
          <div className="mt-16 border border-white/10 bg-[hsl(0_0%_6%)] p-8 sm:p-10">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" strokeWidth={1.6} />
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Formas de Pagamento</span>
              </div>
              <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Escolha a melhor opção para você</span>
            </div>
            <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {formasPagamento.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex items-center gap-4 bg-[hsl(0_0%_8%)] p-5 transition-colors hover:bg-[hsl(0_0%_10%)]">
                  <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.6} />
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-[0.08em] text-white">{t}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* IMPACTO */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <img
              src={mediaPath('caminhonete-elevador.jpg')}
          alt="Veículos em atendimento nos elevadores da Angelo Car Center"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-[80rem] items-center px-5 py-24 sm:px-8">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-[2.2rem] font-bold uppercase leading-[0.98] sm:text-[3.4rem]">
                Performance começa com <span className="text-primary">confiança</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Cuide hoje do seu veículo para dirigir com segurança, desempenho e tranquilidade amanhã.
              </p>
              <Btn href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-9">
                Agendar avaliação
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-y border-white/10 bg-[hsl(0_0%_6%)]">
        <div className="mx-auto max-w-[80rem] px-5 py-24 sm:px-8 sm:py-28">
          <Reveal>
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="font-display text-[1.9rem] font-bold uppercase leading-tight sm:text-[2.5rem]">
              O que dizem nossos clientes
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Experiências reais de quem confiou seus veículos à nossa equipe.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            {depoimentos.map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="group overflow-hidden border border-white/10 border-t-primary bg-background">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={d.imagem}
                      alt="Feedback real de cliente da Angelo Car Center"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="flex gap-5 p-7">
                    <Quote className="mt-1 h-6 w-6 shrink-0 text-primary/70" strokeWidth={1.5} />
                    <div>
                      <blockquote className="text-[1.05rem] leading-relaxed text-white/85">{d.texto}</blockquote>
                      <p className="mt-5 font-display text-sm font-semibold uppercase tracking-wide">{d.autor}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{d.veiculo}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-center border border-white/10 bg-background p-8 sm:p-10">
                <Eyebrow>Confiança comprovada</Eyebrow>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
                  Seu carro tratado por quem entende.
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Cada veículo que entra na Angelo Car Center recebe atenção técnica, cuidado e transparência do primeiro diagnóstico à entrega.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEOS REAIS */}
      <section className="border-b border-white/10 bg-[hsl(0_0%_5%)]">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <Eyebrow>Por dentro da oficina</Eyebrow>
            <h2 className="font-display max-w-2xl text-[2rem] font-bold uppercase leading-tight sm:text-[2.8rem]">
              Atendimento real, estrutura real, <span className="text-primary">confiança real</span>.
            </h2>
          </Reveal>
          <div className={`relative mt-12 overflow-hidden transition-[max-height] duration-500 ${showAllVideos ? '' : 'max-h-[44rem] md:max-h-[39rem]'}`}>
            <div className="grid gap-4 md:grid-cols-3">
            {videos.map((video, i) => (
              <Reveal key={video.src} delay={i * 0.08}>
                <figure className={`relative overflow-hidden border border-white/10 bg-black transition-all duration-500 ${i >= 3 && !showAllVideos ? 'blur-[3px] opacity-55' : ''}`}>
                  <video
                    ref={(element) => {
                      videoRefs.current[i] = element;
                    }}
                    className="aspect-[9/14] w-full bg-black object-cover"
                    controls
                    preload="auto"
                    playsInline
                    onPlay={(event) => {
                      fadeToken.current += 1;
                      fadingVideo.current = null;
                      const videoIndex = videoRefs.current.indexOf(event.currentTarget);
                      setPlayingVideo(video.src);
                      if (videoVolumes.current[videoIndex] !== undefined) {
                        event.currentTarget.volume = videoVolumes.current[videoIndex];
                        videoVolumes.current[videoIndex] = undefined;
                      }
                      videoRefs.current.forEach((element) => {
                        if (element && element !== event.currentTarget) {
                          suppressPauseFade.current = true;
                          element.pause();
                          suppressPauseFade.current = false;
                        }
                      });
                    }}
                    onPause={(event) => {
                      setPlayingVideo((currentVideo) => (currentVideo === video.src ? null : currentVideo));
                      if (suppressPauseFade.current) {
                        return;
                      }
                      if (fadingVideo.current === event.currentTarget) {
                        return;
                      }
                      if (!event.currentTarget.ended) {
                        fadeOutAndPause(event.currentTarget);
                      }
                    }}
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                  {playingVideo !== video.src && (
                    <button
                      type="button"
                      aria-label={`Reproduzir ${video.title}`}
                      onClick={() => videoRefs.current[i]?.play()}
                      className={`absolute left-1/2 top-[42%] z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/55 text-white shadow-[0_8px_24px_-8px_black] backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black ${i >= 3 && !showAllVideos ? 'pointer-events-none' : ''}`}
                    >
                      <span className="ml-1 text-2xl leading-none">▶</span>
                    </button>
                  )}
                  <figcaption className="border-t border-white/10 p-5 font-display text-sm font-semibold uppercase tracking-[0.12em]">
                    {video.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            </div>
            {!showAllVideos && (
              <div className="absolute inset-x-0 bottom-0 flex h-40 items-end justify-center bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/0.85)] to-transparent pb-2">
                <button
                  type="button"
                  onClick={() => setShowAllVideos(true)}
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_10px_30px_-12px_hsl(0_72%_42%/0.9)] transition-colors hover:bg-[hsl(0_72%_36%)]"
                >
                  Ver mais vídeos
                  <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
            )}
          </div>
          {showAllVideos && (
            <button
              type="button"
              onClick={() => setShowAllVideos(false)}
              className="mt-8 inline-flex min-h-11 items-center gap-2 border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              Mostrar menos
              <ChevronUp className="h-4 w-4" strokeWidth={1.8} />
            </button>
          )}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Eyebrow>Galeria</Eyebrow>
          <h2 className="font-display text-[2rem] font-bold uppercase leading-tight sm:text-[2.8rem]">
            Dentro da <span className="text-primary">Angelo Car Center</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {galeria.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.05} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden bg-[hsl(0_0%_8%)]">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[hsl(0_0%_6%)]">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[64rem] px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <h2 className="font-display text-[2.3rem] font-bold uppercase leading-[0.98] sm:text-[3.6rem]">
              Seu carro está em <span className="text-primary">boas mãos</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Agende uma avaliação com a Angelo Car Center e descubra um novo padrão de cuidado para o seu veículo.
            </p>
            <Btn
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 min-h-[60px] px-10 text-sm"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.8} /> Falar com a Angelo Car pelo WhatsApp
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <Eyebrow>Contato</Eyebrow>
          <h2 className="font-display text-[2rem] font-bold uppercase leading-tight sm:text-[2.6rem]">
            Onde nos encontrar
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: contato.whatsappExibicao, href: whatsappLink },
                { icon: Phone, label: 'Telefone', value: contato.telefone, href: `tel:${contato.telefoneLink}` },
                { icon: Mail, label: 'E-mail', value: contato.email, href: `mailto:${contato.email}` },
                { icon: MapPin, label: 'Endereço', value: contato.endereco },
                { icon: Clock, label: 'Horário de atendimento', value: contato.horario },
                { icon: Instagram, label: 'Instagram', value: contato.instagram, href: contato.instagramUrl },
                { icon: Music2, label: 'TikTok', value: contato.instagram, href: contato.tiktokUrl },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4 py-5">
                  <c.icon className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.6} />
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-[1.02rem] text-white/90 transition-colors hover:text-primary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[1.02rem] text-white/90">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-[340px] w-full border border-white/10 lg:h-full">
              <iframe
                title="Localização da Angelo Car Center"
                src={contato.mapaUrl}
                className="h-full w-full grayscale-[0.6]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[hsl(0_0%_5%)]">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-5 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-5">
            <img
              src={logoWithNameSrc}
              alt="Angelo Car Center"
              className="h-24 w-32 shrink-0 object-contain object-left"
            />
            <p className="max-w-sm">Todos os tipos de veículos, com especialização em alemães — Vargem Grande Paulista/SP</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.18em]">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#diferenciais" className="hover:text-white">Diferenciais</a>
            <a href="#galeria" className="hover:text-white">Galeria</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
          <p>© {new Date().getFullYear()} Angelo Car Center.</p>
        </div>
      </footer>

      {/* WHATSAPP FIXO */}
      {whatsappOpen && (
        <section
          className="fixed bottom-24 right-5 z-50 w-[min(calc(100vw-2.5rem),22rem)] overflow-hidden rounded-md border border-white/15 bg-[hsl(0_0%_8%)] shadow-[0_20px_60px_-20px_black]"
          aria-label="Conversa pelo WhatsApp"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em]">Angelo Car Center</p>
              <p className="mt-1 text-xs text-white/75">Fale com a nossa equipe</p>
            </div>
            <button
              type="button"
              onClick={() => setWhatsappOpen(false)}
              aria-label="Fechar conversa"
              className="rounded p-1 text-white/80 transition-colors hover:bg-black/15 hover:text-white"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
          <div className="space-y-4 p-5">
            <div className="max-w-[90%] rounded-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/80">
              Olá! Como podemos ajudar com o seu veículo?
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
              <label htmlFor="whatsapp-message" className="sr-only">Sua mensagem</label>
              <textarea
                id="whatsapp-message"
                value={whatsappMessage}
                onChange={(event) => setWhatsappMessage(event.target.value)}
                rows={3}
                className="w-full resize-none rounded-md border border-white/15 bg-black/20 px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="Escreva sua mensagem..."
              />
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-[hsl(0_72%_36%)]"
              >
                Continuar no WhatsApp
                <Send className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </section>
      )}
      <button
        type="button"
        onClick={() => setWhatsappOpen((isOpen) => !isOpen)}
        aria-expanded={whatsappOpen}
        aria-label={whatsappOpen ? 'Fechar conversa do WhatsApp' : 'Falar pelo WhatsApp'}
        title={whatsappOpen ? 'Fechar conversa' : 'Falar pelo WhatsApp'}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-[0_12px_34px_-10px_hsl(0_72%_42%/0.9)] transition-transform duration-200 active:scale-[0.97]"
      >
        {whatsappOpen ? <X className="h-5 w-5" strokeWidth={1.9} /> : <MessageCircle className="h-5 w-5" strokeWidth={1.9} />}
      </button>
    </div>
  );
}
