import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0)
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">🛒 Your cart is empty!</h2>
        <Link
          to="/products"
          className="text-green-600 hover:underline mt-4 inline-block"
        >
          Shop Products
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Your Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-3"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={item.quantity}
              min="1"
              className="w-16 border rounded text-center"
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4 inline-block hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
