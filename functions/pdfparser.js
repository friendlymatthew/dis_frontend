const pdfParse = require('pdf-parse');

function createWordBank(body) {
  body = body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  words = body.split(/\s+/);
  
  var wordBank = {};

  for (let i = 0; i < words.length; i++) {
    curr = words[i]
    if (!(curr  in wordBank)) {
      wordBank[curr] = 1
    } else {
      wordBank[curr] += 1
    }
  }
}

async function parseFile(file) {
  console.log('attempting to parse');
  body = await pdfParse(file);
  body = body.text;

  // console.log('body', body);

  wordBank = createWordBank(body);

  return body;
  // return wordBank;
}; 



module.exports = { parseFile };
