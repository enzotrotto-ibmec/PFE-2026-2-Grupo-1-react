// Monta o caminho de um arquivo da pasta public/assets/.
export function asset(caminho) {
  return `${import.meta.env.BASE_URL}assets/${caminho}`;
}

export function srcsetDe(base) {
  return [480, 800, 1280].map((largura) => `${asset(`${base}-${largura}.webp`)} ${largura}w`).join(", ");
}
