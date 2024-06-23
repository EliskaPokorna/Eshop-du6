import { render } from '@czechitas/render';
import { HomePage } from '../components/HomePage/Homepage';
import { Product } from '../components/Product/Product';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/eshop")
const json = await response.json()
const eshop = json.data

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <HomePage products={eshop} />
  </div>
);
