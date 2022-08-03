import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './App.css';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
            } />
          <Route path="/products" element={
            <ProtectedRouter>
              <Products />
            </ProtectedRouter>
            } />
          <Route path="/cart" element={
            <ProtectedRouter>
              <Cart />
            </ProtectedRouter>
            } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
