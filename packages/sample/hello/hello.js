const fetch = require("node-fetch")

function main(args) {
  return fetch('https://functionschallenge.digitalocean.com/api/sammy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Sammy',
      type: 'xray',
    }),
  })
}
