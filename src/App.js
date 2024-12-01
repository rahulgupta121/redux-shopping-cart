import Navbar from './components/common/Navbar';
import logo from './logo.svg';
import { Router, BrowserRouter } from 'react-router-dom';
import Test from './components/test';
function App() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1> */}
    <Navbar />
        <Test />
    </>
  );
}

export default App;
