import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestionsArray = [
    { imagem: "assets/img/bad.vibes.memes.svg", usuario: "BadVibesMemes" },
    { imagem: "assets/img/chibirdart.svg", usuario: "chibirdart" },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      usuario: "razoesparaacreditar",
    },
    { imagem: "assets/img/smallcutecats.svg", usuario: "smallcutecats" },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestionsArray.map((props) => (
        <Suggestion imagem={props.imagem} usuario={props.usuario} />
      ))}

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
