import { lenis } from "./rolagem.js";

// Ajudante para o <dialog> nativo do HTML, usado pelas janelas de contato e de agendamento.
//
// O componente da janela só é renderizado quando ela está aberta ({aberto && <dialog ...>}).
// Passamos esta função no atributo ref do <dialog>: o React a chama com o elemento logo que
// ele entra na tela, e aí chamamos showModal(), que dá de graça o fundo escuro (::backdrop),
// o foco preso dentro da janela e o fechamento com Esc (que dispara o evento onClose).
// Fica fora dos componentes para ser sempre a mesma função (o React não a chama de novo a cada render).
//
// Enquanto a janela está aberta a rolagem suave da página (Lenis) fica parada, para a página não
// rolar por baixo; o React 19 chama a função devolvida quando a janela sai da tela, e aí a rolagem volta.
export function abrirComoModal(dialogo) {
  if (!dialogo) return;
  // No modo de desenvolvimento o React chama esta função, a limpeza e a função de novo: por isso
  // o showModal só roda se a janela ainda não estiver aberta, mas a rolagem é parada nas duas vezes.
  if (!dialogo.open) {
    dialogo.showModal();
    // o showModal foca o primeiro botão (o "×"); preferimos o campo marcado com data-autofocus
    const campo = dialogo.querySelector("[data-autofocus]");
    if (campo) campo.focus();
  }
  lenis?.stop();
  return () => lenis?.start();
}
