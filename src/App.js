
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route  path='/products' element={<AllProducts/>}></Route>
            <Route  path='/products/:id' element={<ProductDetails/>}></Route>
            <Route  path='/*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
