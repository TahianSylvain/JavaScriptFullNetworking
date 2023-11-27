const bootDevAPIDomain = 'api.boot.dev'

const apiKey = generateKey()
const items = await getItemData(bootDevAPIDomain)

logItems(items)

async function getItemData(domain) {
    const response = await fetch(`http://www.${domain}/api/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

function genearteKey() {
    const characters = 'Hel1o W0rld!'
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    }
}