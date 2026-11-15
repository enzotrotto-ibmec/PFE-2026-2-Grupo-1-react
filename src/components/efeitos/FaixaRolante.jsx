// Faixa que rola em loop, sem parar (inspirada no LogoLoop da React Bits, reactbits.dev, licença MIT + Commons Clause:
// uso permitido no nosso site, proibido revender o componente). Versão enxuta: só CSS, sem biblioteca.
//
// Props:
//   rotulo      → nome da faixa para leitor de tela (ela é um grupo de itens decorativos de reforço)
//   duracao     → segundos de uma volta completa (maior = mais devagar)
//   porRolagem  → true: o movimento é guiado pela velocidade da rolagem (useFaixaPorVelocidade) e o CSS não anima
//   children    → <li> de cada item; repita itens suficientes para a lista ser mais larga que a tela
//
// A lista é desenhada duas vezes: a volta termina exatamente onde a segunda cópia começa, então o laço não tem emenda.
// A segunda cópia é aria-hidden, e a faixa pausa com o mouse ou o foco em cima.
export default function FaixaRolante({ rotulo, duracao = 40, porRolagem = false, children, className = "" }) {
  return (
    <div
      className={`faixa${porRolagem ? " faixa-por-rolagem" : ""}${className ? ` ${className}` : ""}`}
      role="group"
      aria-label={rotulo}
      style={{ "--faixa-duracao": `${duracao}s` }}
    >
      <div className="faixa-trilho">
        <ul className="faixa-lista">{children}</ul>
        <ul className="faixa-lista" aria-hidden="true">
          {children}
        </ul>
      </div>
    </div>
  );
}
