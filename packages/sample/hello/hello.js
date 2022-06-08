const fetch = require("node-fetch-commonjs")

function main(args) {
  return fetch('https://functionschallenge.digitalocean.com/api/sammy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'KhoPhi',
      type: 'xray',
    }),
  })
}
