import Post from "./Post";

export default function Posts(props) {
  const posts = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      usuario: "meowed",
      imagem: "assets/img/gato-telefone.svg",
      nome: 'respondeai'
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      usuario: "barked",
      imagem: "assets/img/dog.svg",
      nome: 'zoerazoera'
    },
    {
      imagemUsuario: "assets/img/9gag.svg",
      usuario: "9gag",
      imagem: "assets/img/gato-telefone.svg",
      nome: 'amoGatos_'
    },
  ];

  return (
    <div className="posts">
      {posts.map((props, index) => {
        return (
          <Post
            key={index}
            imagemUsuario={props.imagemUsuario}
            usuario={props.usuario}
            imagem={props.imagem}
            nome={props.nome}
          />
        );
      })}
    </div>
  );
}
