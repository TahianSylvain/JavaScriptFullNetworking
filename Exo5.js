function getDomaineNameFromUrl(url) {
    console.log(url)
    return new URL(url).hostname
}

const bootdevURL = 'https://boot.dev/learn/learn-python/'
const domainName = getDomaineNameFromUrl(bootdevURL)
console.log(`The domaine name of ${bootdevURL} is ${domainName}`)