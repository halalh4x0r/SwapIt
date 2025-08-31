function CheckoutPage({ cartItems }) {
  if (!cartItems || cartItems.length === 0) {
    return <h2 className="p-6">Your cart is empty.</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="border p-2 rounded">
            {item.title} - Ksh {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
