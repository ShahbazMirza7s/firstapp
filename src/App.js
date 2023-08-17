import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Home  from "./Components/Home";
import Count from './Components/Count/Count'
import Product from './Components/products/Product';

function App() {
  return (
    <div className="App">
      <Product/>
      {/* <Home/> */}
   
    </div>
  );
}

export default App;
