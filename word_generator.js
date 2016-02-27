var fs = require('fs');
fs.readFile('wordlists/adjectives.txt', "utf-8", (err, data) => {
  var lines = data.split("\r\n");
  var adjectives = lines.slice(0, lines.length -1);
  fs.readFile('wordlists/nouns.txt', "utf-8", (err, data) => {
    if(err){
      console.log(err)
    } else {
      var lines = data.split("\r\n");
      var nouns = lines.slice(0, lines.length -1);

      var adj1 = capitalizeFirstLetter(sampleArray(adjectives));
      var adj2 = capitalizeFirstLetter(sampleArray(adjectives));
      var noun = capitalizeFirstLetter(sampleArray(nouns))
      console.log(adj1 + adj2 + noun);
    }
  })

})

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function sampleArray(array){
  return array[Math.floor(Math.random() * (array.length-1))];
}
