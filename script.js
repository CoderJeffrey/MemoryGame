//Additional Feature
//1. More than 4 game buttons
//2. Speed it up
//3. Use a random secret pattern
//4. Give the player 3 strikes
//5. 


// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const num_of_button = 5;


//Global Variables
//var pattern = [2, 3, 5, 2, 1, 5, 3, 5];
var pattern = new Array(6);
for(let i=0;i<pattern.length;i++){
  pattern[i]=Math.ceil(Math.random() * num_of_button)
}

var wrong_times = 0
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0

var tonePlaying = false; //check whether the sound is playing
var volume = 0.5;  //must be between 0.0 and 1.0


function startGame(){
    //initialize game variables
    wrong_times = 0;
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}



// Sound Synthesis Functions
const freqMap = {
  1: 161.6,
  2: 225.6,
  3: 391.2,
  4: 121.2,
  5: 310.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// End for Sound Synthesis Function

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  document.getElementById("img_button_"+btn).classList.remove("hidden")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  document.getElementById("img_button_"+btn).classList.add("hidden")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 30;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function lossGame()
{
  stopGame();
  alert("Game Over. You lost!");
}

function winGame()
{
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(pattern[guessCounter]==btn)
  {
     if(guessCounter==progress)
    {
      if(progress==pattern.length-1)
      {
        winGame();
      }
      else
      {
        progress++;
        playClueSequence();
      }
    }
    else
    {
      guessCounter++;
    } 
  }
  else{
    wrong_times++;
    alert("You have been wrong for" + wrong_times + " times");
    if(wrong_times == 3)
    { 
      lossGame();
    }
  }
}