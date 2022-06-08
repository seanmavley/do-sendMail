// const fetch = require("node-fetch-commonjs")
const qrcode = require("qrcode");

function main(args) {
  return qrcode.toDataURL(args.text).then((res) => ({
    headers: { "content-type": "text/html; charset=UTF-8" },
    body: args.img == undefined ? res : `<img src="${res}">`,
  }));
  // return fetch('https://functionschallenge.digitalocean.com/api/sammy', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: 'KhoPhi',
  //     type: 'xray',
  //   }),
  // })
}
