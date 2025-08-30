function CheckoutPage({ cartItems }) {
  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Ksh {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
