import './App.css';
import ProductsSection from './components/ProductsSection.js';
import BasketSection from './components/BasketSection.js';

function App() {
  const basket = ["GR1", "SR1", "GR1", "GR1", "CF1"];
  const totalPrice = "22.45";

  return (
    <div className="App">
      <ProductsSection />
      <h1>Basket</h1>
      <BasketSection basket={basket} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
