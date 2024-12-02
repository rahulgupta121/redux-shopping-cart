import Navbar from './components/common/Navbar';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from './components/test';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    
      <Route exact path='/test' element={<Test />}/>
      {/* <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} /> */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
