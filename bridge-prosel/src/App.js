import "./App.css";
import { useState } from "react";

function ResultTable(props) {
  const titleClassName = "text-xl font-semibold text-center"
  const valueClassName = "text-center text-3xl font-semibold"
  return (
    <div className="w-[95%] my-5 border rounded-lg p-5 flex flex-row justify-between shadow-md shadow-purple-300">
      <div className="flex flex-col">
        <h2 className={titleClassName}>Número</h2>
        <p className={valueClassName}>{props.number}</p>
      </div>
      <div className="flex flex-col">
        <h2 className={titleClassName}>Resultado</h2>
        <p className={valueClassName}>{props.result}</p>
      </div>
      <div className="flex flex-col">
        <h2 className={titleClassName}>Tempo de Processamento</h2>
        <p className={valueClassName}>{props.time} segundos</p>
      </div>
    </div>
  );
}

function App() {
  const [prevResults, setPrevResults] = useState([]);

  function handleSubmit(e) {}
  return (
    <div>
      <div className="w-[80%]  my-20 mx-auto">
        <h1 className="text-center text-4xl font-bold">
          Desafio Laboratório Bridge
        </h1>
        {/* <p className="text-center my-7 text-2xl">
          Insira um número para saber quantos números primos menores que ele
          existem.
        </p> */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-row gap-x-5 w-full justify-between items-center w-1/2 h-12 mx-auto mt-10"
        >
          <input
            type="text"
            placeholder="Insira seu número aqui..."
            className="border rounded py-2 placeholder:text-xl px-3 w-full h-full"
          ></input>
          <button
            type="submit"
            className="text-center text-white my-10 text-xl font-semibold bg-purple-700 rounded px-4 py-2 h-full"
          >
            Enviar
          </button>
        </form>
        <div className="grid grid-cols-2 divide-x mx-auto my-10">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-center underline decoration-purple-700 decoration-8">
              Resultado
            </h2>
            <ResultTable number={10} result={4} time={0.3}/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center underline decoration-purple-700 decoration-8">
              Histórico
            </h2>
            {prevResults.map((prevResult) => {
              return <ResultTable number={prevResult.number} result={prevResult.result} time={prevResult.time}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
