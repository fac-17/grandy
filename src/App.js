import React from "react";
import "./App.css";
import Form from "./Form";
import Output from "./Output";

function App() {
  const [clicked, setClicked] = React.useState(false);
  const [pokeIndex, setPokeIndex] = React.useState(0);

  if (!clicked) {
    return (
      <div className="App">
        <Form setClicked={setClicked} setPokeIndex={setPokeIndex} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Output setClicked={setClicked} pokeIndex={pokeIndex} />
      </div>
    );
  }
}

export default App;
