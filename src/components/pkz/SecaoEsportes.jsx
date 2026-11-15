import { useRef } from "react";
import { asset, srcsetDe } from "../../utils/asset.js";
import FaixaRolante from "../efeitos/FaixaRolante.jsx";
import { useFaixaPorVelocidade } from "../../utils/animacoes.js";

// "Sem Limites de Esporte" (exclusiva da PKZ): card da equipe técnica + grade de esportes.
const ESPORTES = [
  { imagem: "img/pkz/karate", alt: "Karatê", pergunta: "Karateca?" },
  { imagem: "img/pkz/JiuJitsu", alt: "Jiu-Jitsu", pergunta: "Praticante de Jiu-Jitsu?" },
  { imagem: "img/pkz/volei", alt: "Vôlei", pergunta: "Jogadora de Vôlei?" },
];

export default function SecaoEsportes() {
  const faixaRef = useRef(null);
  useFaixaPorVelocidade(faixaRef);

  return (
    <section id="services" className="services-section">
      <h2>Sem Limites de Esporte</h2>
      <p className="services-intro">
        Na PKZ, acreditamos que cada pessoa tem um esporte que a move. Estamos prontos para atender{" "}
        <strong>qualquer esporte que você praticar</strong>.
      </p>


      {/* Faixa decorativa: anda sozinha e acelera com a rolagem. Os esportes já estão nos cartões, por isso aria-hidden. */}
      <div ref={faixaRef} aria-hidden="true">
        <FaixaRolante rotulo="Esportes atendidos na PKZ" porRolagem className="faixa-esportes">
          {Array.from({ length: 3 }).flatMap((_, volta) =>
            ["Karatê", "Jiu-Jitsu", "Vôlei", "Qualquer esporte"].map((nome) => <li key={`${volta}-${nome}`}>{nome}</li>),
          )}
        </FaixaRolante>
      </div>

      <div className="team-support-card">
        <div className="team-support-img">
          <img
            src={asset("img/pkz/EquipePKZ-800.webp")}
            srcSet={srcsetDe("img/pkz/EquipePKZ")}
            sizes="(max-width: 860px) calc(100vw - 88px), 400px"
            alt="Equipe PKZ"
            width="2760"
            height="1504"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="team-support-content">
          <span className="support-tag">Suporte Completo &amp; Ciência</span>
          <h3>Corpo Técnico Especializado</h3>
          <p>
            Contamos com <strong>nutricionistas dedicados</strong> ao seu rendimento e realizamos{" "}
            <strong>testes físicos aprovados academicamente</strong> seguindo rigorosos protocolos.
          </p>
        </div>
      </div>

      <div className="sport-grid">
        {ESPORTES.map((esporte) => (
          <CardEsporte key={esporte.alt} {...esporte} />
        ))}
      </div>
      <p className="services-footer">
        E muito mais — futebol, natação, atletismo... <strong>Qual é o seu esporte?</strong>
      </p>
    </section>
  );
}

// Um card de esporte. Props: imagem (nome base), alt, pergunta
function CardEsporte({ imagem, alt, pergunta }) {
  return (
    <div className="sport-card">
      <div className="sport-img-wrapper">
        <img
          src={asset(`${imagem}-800.webp`)}
          srcSet={srcsetDe(imagem)}
          sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 823px) calc((100vw - 76px) / 2), (max-width: 1000px) calc((100vw - 104px) / 3), 299px"
          alt={alt}
          width="2760"
          height="1504"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="sport-caption">
        <h3 className="sport-label">{pergunta}</h3>
        <span className="sport-sub">Nós ajudamos.</span>
      </div>
    </div>
  );
}
