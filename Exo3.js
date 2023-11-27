// FETCHING API  is all about sending an http.request
const apiKey = genearteKey()
const url = getURL()
const settings = getSettings()

const response = await fetch(url, settings)
const responseData = await response.json() //Wait for response requested

logItems(responseData)

function getSettings() {
    return {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    }
}

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

function getURL() {
    return 'http://localhost:8000/api/'
}

function genearteKey() {
    const characters = ''
}