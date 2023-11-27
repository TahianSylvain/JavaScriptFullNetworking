const apiKey = genearteKey()

const itemURL = 'http://localhost:8000/api/'
const items = await getItemData(itemURL)

logItems(items)

async function getData(url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
}