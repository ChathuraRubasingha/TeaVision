import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Pages/Category";
import HeroPage from "./Pages/HeroPage";
import Fiber from "./Pages/Fiber";
import Strock from "./Pages/Strock";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/fiber" element={<Fiber />} />
          <Route path="/strock" element={<Strock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
