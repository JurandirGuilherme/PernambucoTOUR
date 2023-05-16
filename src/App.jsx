import Post from "./post";
import style from "./text.module.css"
 
function App() {
  return (
    <>
      <div className="h-full w-full bg-gray-100">
        {/* <h1 className={style.TextGradient}>Oi</h1> */}
        <div className=" flex h-16 items-center justify-center bg-blue-900 bg-gradient-to-r from-cyan-500 to-cyan-400">
          <h1 className="font-code font-bold text-4xl bg-clip-text"> PernambucoTOUR</h1>
        </div>
        <div className="w-full px-40 flex flex-col">
          <h1 className="text-4xl pt-6 mb-6 font-code">Pontos Turísticos</h1>
          <Post
            titulo="Igreja dos Santos Cosme e Damião"
            subtitulo="Igarassu"
            conteudo="A Igreja dos Santos Cosme e Damião, oficialmente chamada de Igreja Matriz de São Cosme e São Damião, é um templo católico da cidade brasileira de Igarassu, em Pernambuco. É a igreja mais antiga do Brasil de acordo com o Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)."
            imagem="../img/igarassu.jpg"
          />
          <Post
            titulo="Praia da Coroa do Avião"
            subtitulo="Igarassu"
            conteudo="A origem do nome é explicada pela história da ilha. “Quando Duarte Coelho passou por aqui em 1535 e nas cartas náuticas ele fez referência à croa dos passarinhos. Croa quer dizer banco de areia. Na década de 1940 um monomotor da Força Aérea Brasileira fez um pouso forçado na ponta da ilha. Daí a população começou a chamar o local não de croa, mas sim de Coroa do Avião por causa da queda da aeronave”, explicou a diretora executiva de turismo da cidade Ana Alves.
  
  "
            imagem="../img/praia.jpg"
          />
          <Post
            titulo=" Rua do Bom Jesus
            "
            subtitulo="Recife"
            conteudo="A Rua do Bom Jesus, símbolo do Recife e hoje considerada uma das mais bonitas do mundo, já foi Rua do Bode, Rua dos Judeus e Rua da Cruz antes de ter o atual nome. É uma história que remete aos primeiros séculos da colonização, ainda no século 17. Nos meados dos anos 1500, o Recife era apenas o atual Recife Antigo, sendo um pequeno povoado localizado ao Sul de Olinda - que abrigava a sede do governo da capitania de Pernambuco."
            imagem="../img/bom-jesus.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default App;
