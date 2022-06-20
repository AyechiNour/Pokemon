import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./Pokemon";
import Pokemons from "./Pokemons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;