import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useFilters } from "../hooks/useFilters";
import mock from "../mocks/products.json";
import "../styles/product.css";
import { useCart } from "../hooks/useCart";

export function Products() {
	const products = mock.products;
	const { filterProducts } = useFilters();
	const filteredProducts = filterProducts(products);

	const { addToCart, cart, removeFromCart } = useCart();

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	return (
		<main className="main-container">
			<ul className="list-of-elements">
				{filteredProducts.slice(0, 12).map((product) => {
					const isProductInCart = checkProductInCart(product)
					return (
						<li key={product.id} className="element">
							<img src={product.thumbnail} alt={product.title} />

							<div>
								<strong>
									{product.title} - ${product.price}
								</strong>
							</div>
							<button style={{backgroundColor: isProductInCart ?'red' :'blue'}} onClick={() => isProductInCart 
								?removeFromCart(product)  
								:addToCart(product) }>
								{
									isProductInCart 
									? <RemoveFromCartIcon />
									: <AddToCartIcon />
								}
							</button>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
