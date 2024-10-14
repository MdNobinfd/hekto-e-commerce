export default async function allPostID(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json()
}