// Rolagem suave (Lenis) ligada ao GSAP. Uma única instância para o site todo, criada antes do React.
// Documentação: github.com/darkroomengineering/lenis (conferida em 2026-11-15, versão 1.3.27).
//
// A Lenis roda no relógio do GSAP (gsap.ticker) e avisa o ScrollTrigger a cada passo; sem isso as
// animações presas à rolagem (pin e scrub) saem de sincronia. No celular a rolagem por toque
// continua nativa (syncTouch fica no padrão, false).
//
// Se a Lenis falhar ao iniciar, `lenis` fica null e o site rola do jeito nativo (navegacao.js trata os dois casos).
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function iniciar() {
  try {
    const instancia = new Lenis({ autoRaf: false });
    instancia.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((tempo) => instancia.raf(tempo * 1000)); // o ticker do GSAP dá segundos; a Lenis quer ms
    gsap.ticker.lagSmoothing(0);
    return instancia;
  } catch (erro) {
    console.error("Lenis não iniciou; usando a rolagem nativa.", erro);
    return null;
  }
}

export const lenis = iniciar();
