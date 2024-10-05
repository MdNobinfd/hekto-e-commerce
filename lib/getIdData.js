export default async function getIdData(id){
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    return result.json()
}