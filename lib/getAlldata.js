export default async function getAlldata(){
    const result = await fetch('https://dummyjson.com/products?limit=0&sortBy=title&skip=5');
    return result.json()
}