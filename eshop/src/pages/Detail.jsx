import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import '../components/Detail/Detail.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/eshop/${id}`)
const json = await response.json()
const product = json.data

const ProductPage = ({ detail }) => {
    return (
        <div className='detail-container'>
            <h2>{detail.name}</h2>
            <p>{detail.description}</p>
            <p>{detail.price} Kč</p>
            <img src={detail.image} alt={detail.name} />
        </div>
    )
}

document.querySelector('#root').innerHTML = render(
    <div className="container">
        <ProductPage detail={product} />
    </div>
);