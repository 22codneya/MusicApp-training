import { Routes, Route } from "react-router-dom";
import AllSongs from "./pages/allSongs";
import Favourite from "./pages/favourite"


function App() {
  return (
    <Routes>
      <Route index element={<AllSongs/>} />
      <Route path="/favourite" element={<Favourite/>} />
    </Routes>
  );
}

export default App;