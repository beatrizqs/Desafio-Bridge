import "./App.css";
import { useState } from "react";

function ResultTable(props) {
  const titleClassName = "text-xl font-semibold text-center";
  const valueClassName = "text-center text-3xl font-semibold";
  return (
    <div className="w-[95%] my-5 border rounded-lg p-5 flex flex-row justify-between shadow-md">
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
        <p className={valueClassName}>{props.time} ms</p>
      </div>
    </div>
  );
}

function App() {
  // retirar arquivos e imagens nao usadas
  const [prevResults, setPrevResults] = useState([]);
  const [currentResult, setCurrentResult] = useState({});
  const [number, setNumber] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const numberAsInt = parseInt(number);
    console.log(numberAsInt);

    if (isNaN(numberAsInt)) {
      setShowErrorMessage(true);
    } else {
      fetch(`/api/${10}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentResult(data);
          setPrevResults([...prevResults, data]);
        });

      setShowErrorMessage(false);
    }
  }

  return (
    <div>
      <div className="w-[80%] max-w-[1500px] my-20 mx-auto">
        <h1 className="text-center text-4xl font-bold">
          Desafio Laboratório Bridge
        </h1>
        {/* <p className="text-center my-7 text-2xl">
          Insira um número para saber quantos números primos menores que ele
          existem.
        </p> */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-1/2 mx-auto mt-10"
        >
          <div className="flex flex-row gap-x-5 justify-between items-center h-12">
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Insira seu número aqui..."
              className={`border rounded py-2 placeholder:text-xl placeholder:font-normal px-3 w-full h-full ${
                showErrorMessage ? "border-red-600" : ""
              }`}
            ></input>
            <button
              type="submit"
              className="text-center text-white my-10 text-xl font-semibold bg-purple-700 rounded px-4 py-2 h-full"
            >
              Enviar
            </button>
          </div>
          {showErrorMessage && (
            <p className="text-red-600 font-regular my-3">
              Número inválido. Por favor, insira um número inteiro e positivo.
            </p>
          )}
        </form>
        <div className="grid grid-cols-2 divide-x mx-auto my-20">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-center underline decoration-purple-700 decoration-8 mb-5">
              Resultado
            </h2>
            {Object.keys(currentResult).length > 0 && (
              <ResultTable
                number={currentResult.number}
                result={currentResult.primeNumbers}
                time={currentResult.time}
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center underline decoration-purple-700 decoration-8 mb-5">
              Histórico
            </h2>
            {prevResults.reverse().map((prevResult) => {
              return (
                <ResultTable
                  number={prevResult.number}
                  result={prevResult.primeNumbers}
                  time={prevResult.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
