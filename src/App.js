import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/product/:productkey' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
