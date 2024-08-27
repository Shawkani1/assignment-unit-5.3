console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
function addToCollection(Collection, title, artist, yearPublished){
   const newObject = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
   };
   Collection.push[newObject];

   return newObject;
};


console.log(myCollection.push("Empire state of mind", "Jay-z", 2009));
console.log(myCollection.push("lollipop", "lil wayne", 2008));
console.log(myCollection.push("Mirror", "Lil wayne", 2011));
console.log(myCollection.push("Family matters", "Drake", 2024));
console.log(myCollection.push("one Dance", "Drake", 2016));
console.log(myCollection.push("Passionfruit", "Drake", 2017));

console.log(myCollection);












// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
