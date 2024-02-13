function displayDateTime() {
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('dateTime').innerText = `It is currently ${time} on ${dayOfWeek}, ${date} ${month}, ${year}`;
  }
  
  function submitInfo() {
    const name = document.getElementById('nameInput').value;
    const feeling = document.getElementById('feelingInput').value;
    const number = Math.abs(Math.round(parseFloat(document.getElementById('numberInput').value)));
    
    alertPolygonName(number);
    
    const greeting = `The Colorful Dandan welcomes you, ${name}!\nWe see that you're feeling ${feeling}!`;
    alert(greeting);
  }
  
  function alertPolygonName(number) {
    const polygonNames = ['there is no polygon with 0 sides', 'henagon', 'digon', 'trigon', 'tetragon', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'enneagon', 'decagon'];
    const index = Math.min(Math.max(number, 0), polygonNames.length - 1);
    if(number === 0){
        alert("There is no polygon with 0 sides!");
    } else{
    alert(`The polygon with ${number} side(s) is called a ${polygonNames[index]}.`);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    displayDateTime();
    document.getElementById('submitButton').addEventListener('click', submitInfo);
  });
  function fishingFacts() {
    const facts = [
      "The largest fish ever caught was a whale shark, measuring 40 feet long and weighing over 47,000 pounds!",
      "Fishing is the world's second most popular hobby after stamp collecting!",
      "Goldfish are one of the few fish species that can recognize and remember human faces!"
    ];
    displayOutput(getRandomElement(facts));
  }
  
  function fishingJokes() {
    const jokes = [
      "Why did the fish blush? Because it saw the ocean's bottom!",
      "What do you get when you cross a fishing lure with a gym sock? A hook, line, and stinker!",
      "Why don't fish play piano? Because you can't tuna fish!"
    ];
    displayOutput(getRandomElement(jokes));
  }
  
  function fishSpecies() {
    const species = [
      "Trout",
      "Salmon",
      "Bass",
      "Catfish",
      "Perch",
      "Dandan"
    ];
    const randomSpecies = getRandomElement(species);
    displayOutput(`The featured fish for today is: ${randomSpecies}!`);
  }
  
  function fishingTips() {
    const tips = [
      "Patience is key! You have to wait for the perfect catch.",
      "Check the weather forecast before heading out to fish. Fish are more likely to bite when skies are overcast or during light rain!",
      "Use the right bait for the type of fish you're trying to catch. Different species prefer different types of bait!"
    ];
    displayOutput(getRandomElement(tips));
  }
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function displayOutput(message) {
    document.getElementById('output').textContent = message;
  }
  
  