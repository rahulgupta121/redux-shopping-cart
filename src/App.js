import Navbar from './components/common/Navbar';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from './components/test';
import ProductCard from './components/product/ProductCard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    
      <Route exact path='/test' element={<Test />}/>
      <Route exact path="/" element={<ProductCard />} />
         {/* <Route path="/cart" element={<CartPage />} /> */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
