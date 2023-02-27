import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

export function App() {
	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products />
			<Footer />
		</CartProvider>
	);
}
