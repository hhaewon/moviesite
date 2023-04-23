import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/movie/:id" element={<Detail />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
