const arg = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(`${arg[0]}`, (error, response, body) => {
  const content = body;
  fs.writeFile(`${arg[1]}`, content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloded and saved ${content.length} bytes to ${arg[1]}`)
  })
});
