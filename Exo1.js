const apiKey = generateKey()
const items = await getItemData()

logItems(items)

async function getItemData() {
    const response = await fetch('http://localhost:8000/api/', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
        }
    })
    /* .catch(onrejected?:
            ((reason: any) => PromiseLike<never>) | null | undefined):
        Promise<Response>) */
    return response.json()
}

function genearteKey() {
    const characters = 'Hel1o W0rld!'
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += characters.charAt(Math.floor(Math.random()*characters));
    }
    return result
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    }
}