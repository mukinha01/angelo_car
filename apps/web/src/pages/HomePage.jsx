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
  MessageCircle,
  Quote,
  ArrowUpRight,
  Mail,
  CreditCard,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { contato, whatsappLink } from '@/data/siteConfig';

const marcas = ['Volkswagen', 'Mercedes-Benz', 'BMW', 'Audi'];

const servicos = [
  { icon: Fuel, t: 'Injeção Eletrônica', d: 'Diagnóstico e correção do sistema de injeção para máxima eficiência.' },
  { icon: RefreshCw, t: 'Embreagem', d: 'Troca e regulagem de embreagens com peças de alta qualidade.' },
  { icon: Disc3, t: 'Freio e Suspensão', d: 'Discos, pastilhas e sistemas de suspensão revisados com precisão.' },
  { icon: Wrench, t: 'Mecânica Geral', d: 'Intervenções completas em motores e sistemas mecânicos.' },
  { icon: Droplets, t: 'Troca de Óleo', d: 'Troca com óleos homologados pelos fabricantes alemães.' },
  { icon: Settings2, t: 'Câmbio Técnico', d: 'Especialização em câmbios automáticos e automatizados.' },
  { icon: ScanLine, t: 'Diagnóstico Computadorizado', d: 'Leitura eletrônica completa de módulos e sensores.' },
];

const diferenciais = [
  { icon: Target, t: 'Diagnóstico preciso', d: 'Utilizamos tecnologia de ponta para identificar a real necessidade do seu veículo.' },
  { icon: UserCheck, t: 'Atendimento personalizado', d: 'Cada cliente recebe uma abordagem individual, transparente e profissional.' },
  { icon: ShieldCheck, t: 'Garantia de 3 meses', d: 'Todos os serviços possuem garantia de 3 meses, assegurando qualidade e confiança.' },
  { icon: Eye, t: 'Transparência total', d: 'Explicamos cada serviço necessário antes da execução, sem surpresas no orçamento.' },
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
  { texto: '[PLACEHOLDER] Insira aqui o depoimento real do cliente.', autor: '[PLACEHOLDER] Nome do cliente', veiculo: '[PLACEHOLDER] Modelo do veículo' },
  { texto: '[PLACEHOLDER] Insira aqui o depoimento real do cliente.', autor: '[PLACEHOLDER] Nome do cliente', veiculo: '[PLACEHOLDER] Modelo do veículo' },
  { texto: '[PLACEHOLDER] Insira aqui o depoimento real do cliente.', autor: '[PLACEHOLDER] Nome do cliente', veiculo: '[PLACEHOLDER] Modelo do veículo' },
];

const galeria = [
  { src: 'https://images.hostinger.com/6aeac844-05c0-42fd-b4c7-d81cb16bee9b.png', alt: 'Detalhe de motor de veículo premium em oficina', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.hostinger.com/696a5dca-9ac4-4389-8583-54ccdea90628.png', alt: 'Mecânico realizando diagnóstico computadorizado', span: '' },
  { src: 'https://images.hostinger.com/08c59eb6-6aa3-44ca-a2eb-4159879b7af2.png', alt: 'Sistema de freios de alta performance', span: '' },
  { src: 'https://images.hostinger.com/897dea14-0ae9-4526-980d-c20a41ea0a65.png', alt: 'Veículo premium em manutenção na oficina', span: 'md:col-span-2' },
  { src: 'https://images.hostinger.com/d83d299d-7117-48d0-9d8c-aba643377f21.png', alt: 'Mecânicos especializados trabalhando em veículo', span: '' },
  { src: 'https://images.hostinger.com/7d8eee7e-cec5-432b-ba8c-725182f9a70e.png', alt: 'Equipamentos de diagnóstico automotivo', span: '' },
];

const Btn = ({ href, children, variant = 'solid', className = '', ...rest }) => {
  const base =
    'inline-flex items-center justify-center gap-2 min-h-[48px] px-7 text-[0.82rem] font-semibold uppercase tracking-[0.16em] transition-all duration-200 active:scale-[0.98]';
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
  return (
    <div className="min-h-screen bg-background text-foreground">
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
        image="https://horizons-cdn.hostinger.com/76ba7bb2-a01e-4d37-90d7-78ba84e7d717/fc6255d07b9569d8e055d66ecee5314d.jpg"
        siteName="Angelo Car Center"
      />

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src="https://horizons-cdn.hostinger.com/76ba7bb2-a01e-4d37-90d7-78ba84e7d717/e6cf14d3b69b1730b308ba510b7a38f6.jpg"
              alt="Angelo Car Center logo"
              className="h-10 w-auto"
            />
            <span className="font-display text-base font-bold uppercase tracking-[0.1em] hidden sm:block">
              Angelo<span className="text-primary">Car</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#diferenciais" className="transition-colors hover:text-foreground">Diferenciais</a>
            <a href="#galeria" className="transition-colors hover:text-foreground">Galeria</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <Btn href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden px-5 sm:inline-flex">
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} /> WhatsApp
          </Btn>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="relative flex min-h-[100dvh] items-end overflow-hidden">
        <img
          src="https://images.hostinger.com/6109a4f0-4c3d-466e-993d-1c3ff84db381.png"
          alt="Veículo premium em oficina especializada com iluminação escura e detalhes em vermelho"
          className="absolute inset-0 h-full w-full object-cover"
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
            <Eyebrow>Especialistas em Volkswagen, BMW, Mercedes-Benz e Audi</Eyebrow>
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
              em todos os serviços para o seu carro alemão.
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
                src="https://horizons-cdn.hostinger.com/76ba7bb2-a01e-4d37-90d7-78ba84e7d717/fc6255d07b9569d8e055d66ecee5314d.jpg"
                alt="Angelo Car Center"
                className="h-24 w-auto"
              />
            </div>
            <Eyebrow>Sobre a Angelo Car Center</Eyebrow>
            <h2 className="font-display text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.9rem]">
              Seu carro alemão merece mais do que uma oficina. Merece <span className="text-primary">especialistas</span>.
            </h2>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              A Angelo Car Center é especializada em veículos Volkswagen, Mercedes-Benz, BMW e Audi em
              Vargem Grande Paulista. Trabalhamos com foco em precisão, transparência e excelência,
              garantindo que cada serviço seja executado com o mais alto padrão técnico.
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

      {/* SERVIÇOS */}
      <section id="servicos" className="border-y border-white/10 bg-[hsl(0_0%_6%)]">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="font-display max-w-2xl text-[2rem] font-bold uppercase leading-[1.02] sm:text-[2.8rem]">
              Serviço técnico completo para carros alemães.
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
          <div className="mt-16 border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-5">
              <CreditCard className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Formas de Pagamento</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Cartão de Débito', 'Cartão de Crédito em até 6x sem juros', 'PIX', 'Dinheiro'].map((f) => (
                <span key={f} className="border border-white/15 px-4 py-2 text-sm text-white/70 uppercase tracking-[0.1em]">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* IMPACTO */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <img
          src="https://images.hostinger.com/53815128-46e8-4a66-8a75-df596076eefe.png"
          alt="Veículo premium sob luz noturna após manutenção especializada"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-[80rem] items-center px-5 py-24 sm:px-8">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-[2.2rem] font-bold uppercase leading-[0.98] sm:text-[3.4rem]">
                Performance começa com <span className="text-primary">confiança</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Cuide hoje do seu carro alemão para dirigir com segurança, desempenho e tranquilidade amanhã.
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
              Espaço reservado para avaliações reais. Substitua os textos marcados como [PLACEHOLDER].
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between border border-white/10 border-t-primary bg-background p-7">
                  <Quote className="h-6 w-6 text-primary/70" strokeWidth={1.5} />
                  <blockquote className="mt-5 text-[0.95rem] leading-relaxed text-white/70">{d.texto}</blockquote>
                  <figcaption className="mt-7 border-t border-white/10 pt-5">
                    <p className="font-display text-sm font-semibold uppercase tracking-wide">{d.autor}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{d.veiculo}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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
              Agende uma avaliação com a Angelo Car Center e descubra um novo padrão de cuidado para o seu carro alemão.
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
                { icon: Instagram, label: 'Instagram / TikTok', value: contato.instagram, href: contato.instagramUrl },
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
          <div className="flex items-center gap-4">
            <img
              src="https://horizons-cdn.hostinger.com/76ba7bb2-a01e-4d37-90d7-78ba84e7d717/e6cf14d3b69b1730b308ba510b7a38f6.jpg"
              alt="Angelo Car Center"
              className="h-10 w-auto"
            />
            <div>
              <p className="font-display text-base font-bold uppercase tracking-[0.14em] text-white">
                Angelo<span className="text-primary">Car</span> Center
              </p>
              <p className="mt-1">Especialistas em carros alemães — Vargem Grande Paulista/SP</p>
            </div>
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
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex min-h-[56px] items-center gap-2 bg-primary px-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_12px_34px_-10px_hsl(0_72%_42%/0.9)] transition-transform duration-200 active:scale-[0.97]"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
