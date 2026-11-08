export default function EstilosDaPagina({ folhas }) {
  return <style>{folhas.join("\n")}</style>;
}
