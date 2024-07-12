import { useState } from "react";

export default function Post({ imagemUsuario, usuario, imagem, nome } ) {
  const [bookmarkIcon, setBookmarkIcon] = useState("bookmark-outline");
  const [likeIcon, setLikeIcon] = useState("heart-outline");
  const [likesNumber, setLikesNumber] = useState(110102);

  function botaoSalvar() {
    const novoIcone =
      bookmarkIcon === "bookmark-outline" ? "bookmark" : "bookmark-outline";
    setBookmarkIcon(novoIcone);
  }

  function botaoLike() {
    const novoIcone = likeIcon === "heart-outline" ? "heart" : "heart-outline";
    setLikeIcon(novoIcone);

    setLikesNumber((prevLikes) =>
      novoIcone === "heart" ? prevLikes + 1 : prevLikes - 1
    );
  }

  function imageLike() {
    const novoIcone = likeIcon === "heart-outline" ? "heart" : "";
    setLikeIcon(novoIcone);

    if (novoIcone === 'heart') {
      setLikesNumber((prevLikes) => prevLikes + 1)
    }
  }

  return (
    <>
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={ imagemUsuario } alt="meowed" />
            {usuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img
            onClick={imageLike}
            src={imagem}
            alt="gato-telefone"
          />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={likeIcon} onClick={botaoLike}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={bookmarkIcon} onClick={botaoSalvar}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai" />
            <div className="texto">
              Curtido por <strong>{nome}</strong> e{" "}
              <strong>outras {likesNumber} pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="assets/img/barked.svg" alt="barked" />
            barked
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src="assets/img/dog.svg" alt="dog" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={likeIcon} onClick={imageLike}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={bookmarkIcon} onClick={botaoSalvar}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div className="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras {likesNumber} pessoas</strong>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
