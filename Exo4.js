const domain = 'amazon.com'

async function fetchIPAddress(domain) {
    // cloudflare-dns.com/ is a good tools to detect @IP of a DNS.web
    const resp = await fetch('http://cloudflare-dns.com/dns-query?name=${domaine}&type=A', {
        headers: {
            'accept': 'application/json'
        }
    })
    const resObject = await resp.json()
    console.log(resObject)
    return resObject[0].data
}

const fetchIPAddress = await fetchIPAddress(domain)