import "./App.css";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import NFTMarketPlace from "./pages/NFTMarketPlace";
import SmartContracts from "./pages/SmartContracts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nftmarketplace' element={<NFTMarketPlace />} />
        <Route path='/smartcontract' element={<SmartContracts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
