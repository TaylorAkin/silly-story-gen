
//Declaring variables. Returns the id and element within the html. Syncing js into the html
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

//creating a funciton to choose a a random input from the array
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}



//declaring variables and their arrays for the story for later function
let storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas', 'Mr. Bunny', 'Captain Hook'];
let insertY = ['the soup kitchen, Disneyland, the White House', 'prison'];
let insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away','grew small fairy wings'];


//adding a click event listenr to the button setting to the result function
randomize.addEventListener('click', result);


//setting up the function for the new random stories to be in the story text.
function result() {
    let newStory = storyText;

    //setting variables to be the random values from array
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    //this replaces the above random values from the array into the story text
    newStory = newStory.replace(':insertX:', xItem);
    newStory = newStory.replace(':insertX:', xItem);
    newStory = newStory.replace(':insertY:', yItem);
    newStory = newStory.replace(':insertZ:', zItem);


// if you type in a name into the custom name label, the new variable name will be replaced in the newstory in place of Bob
  if(customName.value !== ' ') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  //tying the uk id from html and if checked, from newly created variables for this if statment changing the weight and temp, then replaces for the us values in the new story. 
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + 'stone' ;
    var temperature =  Math.round((94 - 32) * 5 / 9 ) + 'centrigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }

//making the text content property of the paragraph story equal to newStory and tapping into the css of the story class and making it visible not hidden.
    story.textContent = newStory ;
    story.style.visibility = 'visible';

}

