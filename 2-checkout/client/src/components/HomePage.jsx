function HomePage({ buttonHandler, alreadyPurchased }) {
  if (alreadyPurchased) {
    return <span>Thank you for your purchase!</span>;
  } else {
    return (
      <>
        🛒
        <br />
        <button next="Form1" onClick={buttonHandler}>
          Checkout
        </button>
      </>
    );
  }
}

export default HomePage;
