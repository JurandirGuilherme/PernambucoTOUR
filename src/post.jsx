const Post = (props) => {
  return (
    <>
      <div className="flex flex-row-reverse text-3xl mb-3 font-thin w-fit hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer hover:bg-blue-100 hover:rounded-2xl p-4 hover:transition-transform ease-in-out">
        <div className="ml-3 w-96">
            <h1 id="titulo">
              {props.titulo}
            </h1>
            <h2 className="text-sm my-1">{props.subtitulo}</h2>
            <p className="text-base break-words text-justify">
              {props.conteudo}
            </p>
        </div>
        <img className="rounded-2xl w-96" src={props.imagem} />
      </div>
    </>
  );
};

export default Post;
