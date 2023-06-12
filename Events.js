
var W = 1; //create a shared variable for both functions "frame" to write to to allow them to affect eachother
function LMove() {
  var elem = document.getElementById("meme"); // grabs the"meme" id declared inside the html
  var pos = 0; // set starting point to 0
  clearInterval(W);
  W = setInterval(frame, 1); //setting speed to intervals of 1, slower that .5, faster than 10
  function frame() {
    if (pos == 1000) {  //sets the limit to 1000 pixels
      clearInterval(W);
    } else {
      pos++; 
      elem.style.left = pos + 'px'; // moves the element to the left
    }
  }
}
function RMove() {  // same function as the initial move function but sends image to the right to cancel a left movement
  var elem = document.getElementById("meme");   
  var pos = 0;
  clearInterval(W);
  W = setInterval(frame, 1);
  function frame() {
    if (pos == 1000) {  
      clearInterval(W);
    } else {
      pos++; 
      elem.style.right = pos + 'px';  //moves the element to the right
    }
  }
}