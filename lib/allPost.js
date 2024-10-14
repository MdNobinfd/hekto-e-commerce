export default async function allPost(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
    return result.json()
}