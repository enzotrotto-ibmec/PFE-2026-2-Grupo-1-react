// Ajudantes de rolagem usados pelos links internos (components/LinkInterno.jsx).
// A rolagem suave vem da Lenis (utils/rolagem.js). Se ela não iniciou (lenis === null),
// cada função usa a rolagem nativa do navegador.
import { lenis } from "./rolagem.js";

// Leva a tela para o topo, sem animação. Usado ao trocar de página: o React Router troca o
// componente, mas não rola a tela sozinho, e uma rolagem suave seria interrompida no meio pela troca.
export function irParaTopo() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0, behavior: "instant" });
}

// Rola suave até o topo (botão "Voltar ao topo").
export function voltarAoTopo() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

// Rola até a seção com esse id (ex.: "sobre").
// Se o link também troca de página (ex.: da Aula Experimental para /pkz#sobre),
// a seção ainda não existe no momento do clique: tentamos de novo a cada quadro
// (requestAnimationFrame) até ela aparecer, por no máximo ~1 segundo.
export function rolarParaSecao(id) {
  let tentativas = 0;
  function tentar() {
    const secao = document.getElementById(id);
    if (secao) {
      // Seção que trava a tela e acende o texto com a rolagem (animacoes.js): vai até o FIM da trava,
      // senão a pessoa chegaria num texto ainda apagado. Sem trava, rola até o topo da seção.
      const fimDaTrava = Number(secao.dataset.fimPin);
      const travada = Number.isFinite(fimDaTrava) && fimDaTrava > 0;
      // a Lenis já desconta o scroll-padding-top da página e o scroll-margin-top da seção, como a rolagem nativa
      if (lenis) lenis.scrollTo(travada ? fimDaTrava : secao);
      else if (travada) window.scrollTo({ top: fimDaTrava, behavior: "smooth" });
      else secao.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (tentativas < 60) {
      tentativas++;
      requestAnimationFrame(tentar);
    }
  }
  requestAnimationFrame(tentar);
}
