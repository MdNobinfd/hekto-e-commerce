export default async function getAlldata() {
  const res = await fetch("https://dummyjson.com/products?limit=0&sortBy=title&skip=5");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
