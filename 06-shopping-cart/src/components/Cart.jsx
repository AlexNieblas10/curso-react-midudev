import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";

export function Cart() {
	const cartCheckboxId = useId();

	const { cart, clearCart, addToCart } = useCart();

	function obtenerElPrecioTotal() {
		let precioTotal = 0;
		cart.map((product) => {
			precioTotal += product.actionPayload.price * product.quantity;
		});
		return precioTotal;
	}

	function CartItem({ thumbnail, price, title, quantity, addToCart }) {
		return (
			<li>
				<img src={thumbnail} alt={title} />
				<div>
					<strong>{title}</strong> - ${price}
				</div>
				<footer>
					<small>Qty: {quantity}</small>
					<button onClick={addToCart}>+</button>
				</footer>
			</li>
		);
	}

	return (
		<>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type="checkbox" hidden />
			<aside className="cart">
				<ul>
					{cart.map((product) => {
						return (
							<CartItem
								key={product.actionPayload.id}
								addToCart={() => addToCart(product)}
								{...product.actionPayload}
								{...product}
							/>
						);
					})}
				</ul>
				<button onClick={clearCart}>{ClearCartIcon(cart)}</button>
				{cart.length >= 1 && <div>Precio total: {obtenerElPrecioTotal()}</div>}
			</aside>
		</>
	);
}
