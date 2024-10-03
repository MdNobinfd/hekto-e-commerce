export default async function getAlldata(id){
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    return result.json()
}