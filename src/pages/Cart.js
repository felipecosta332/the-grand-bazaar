import { useSelector } from "react-redux/es/hooks/useSelector";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = ({ title }) => {
  useTitle(title);
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total)

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} / ${total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
