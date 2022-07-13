import { Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import SingleCar from "./pages/SingleCar";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cars" element={<Cars/>}></Route>
        <Route path="cars/:name" element={<SingleCar />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
