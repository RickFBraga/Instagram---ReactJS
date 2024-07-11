import { useState } from "react";

export default function User() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [imagemUsuario, setImagemUsuario] = useState("");

  function alterarNomeUsuario() {
    const nomeDigitado = prompt("Digite seu nome: ");

    if (nomeDigitado !== null && nomeDigitado.trim() !== "") {
      setNomeUsuario(nomeDigitado);
      const campoNome = document.querySelector(".nome-usuario");
      campoNome.innerHTML = nomeDigitado;
    }
  }

  function alterarImagemUsuario() {
    const imagemLink = prompt("Digite novo link: ");

    if (imagemLink !== null && imagemLink.trim() !== "") {
      setImagemUsuario(imagemLink);
      const campoImagem = document.querySelector(".image-usuario");
      campoImagem.src = imagemLink;
    }
  }

  return (
    <div className="usuario">
      <img
        className="image-usuario"
        onClick={alterarImagemUsuario}
        src={imagemUsuario}
        alt="imagem de perfil"
      />
      <div className="texto">
        <span>
          <strong className="nome-usuario">{nomeUsuario || "Seu nome"}</strong>
          <ion-icon name="pencil" onClick={alterarNomeUsuario}></ion-icon>
        </span>
      </div>
    </div>
  );
}
