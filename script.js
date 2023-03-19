//your code here
// Define an array of band names
let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Led Zeppelin', 'The Rolling Stones', 'The Who'];

// Define an array of articles
let articles = ['a', 'an', 'the'];

// Define a function to remove articles from a string
function removeArticles(str) {
  // Split the string into an array of words
  let words = str.split(' ');
  
  // Remove articles from the array of words
  let filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  
  // Join the remaining words back into a string
  let filteredStr = filteredWords.join(' ');
  
  // Return the filtered string
  return filteredStr;
}

// Sort the array of band names in lexicographic order (excluding articles)
bandNames = bandNames.map(removeArticles).sort();

// Get the ul element from the HTML
let bandList = document.getElementById('band');

// Create li elements for each band name and add them to the ul element
bandNames.forEach(bandName => {
  let li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});

