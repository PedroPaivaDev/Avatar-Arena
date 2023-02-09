const baseURL = 'https://my-json-server.typicode.com/PedroPaivaDev/Avatar-Arena'
    
export default async function getCards() {
const response = await fetch(`${baseURL}/cards`);
return await response.json();
}