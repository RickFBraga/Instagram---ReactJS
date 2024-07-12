export default function Suggestion({ imagem, usuario }) {
  return (
    <>
      <div className="sugestao">
        <div className="usuario">
          <img src={imagem} alt="bad.vibes.memes.svg" />
          <div className="texto">
            <div className="nome">{usuario}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    </>
  );
}
