export async function getProducts() {
  const res = await fetch(
    "https://sbulutgenc.pythonanywhere.com/api/products/"
  );

  if (!res.ok) {
    throw new Error(
      "An error occoured while getting products from the server."
    );
  }

  return res.json();
}
