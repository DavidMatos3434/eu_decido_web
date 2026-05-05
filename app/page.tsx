import Hero from "../components/Hero";
import Section from "../components/Section";
import Agents from "../components/Agents";
import Recruitment from "../components/Recruitment";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="O que é o EU DECIDO">
        Plataforma de democracia digital onde cidadãos podem propor, debater e votar decisões com apoio de inteligência artificial.
      </Section>

      <Section title="Como Funciona">
        Propostas → Debate → Síntese por IA → Votação → Resultados transparentes
      </Section>

      <Agents />

      <Section title="Tecnologia e Confiança">
        Sistema baseado em Supabase, autenticação segura, e agentes de IA auditáveis.
      </Section>

      <Recruitment />

      <Footer />
    </>
  );
}