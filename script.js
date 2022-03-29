const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var volume = 0.5;
var tonePlaying = false;
var guessCounter = 0;
var mistakeCounter = 0;
var timerPerRound = 10;
var timer = timerPerRound;
var mainTimer;
var buttonTimer;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("d-none");
  document.getElementById("stopBtn").classList.remove("d-none");
  document.getElementById("progressBarTimer").classList.add("progress-bar-striped", "progress-bar-animated");
  randomizePattern();
  playClueSequence();
  mainTimer = setInterval(gameTimer, 100);
  document.getElementById("randomizeTextCheckbox").disabled = true;
}

function stopGame() {
  resetTimer();
  gamePlaying = false;
  mistakeCounter = 0;
  document.getElementById("turn").innerHTML = 0;
  document.getElementById("mistakes").innerHTML = 0;
  document.getElementById("startBtn").classList.remove("d-none");
  document.getElementById("stopBtn").classList.add("d-none");
  document.getElementById("randomizeTextCheckbox").disabled = false;
}

function randomizePattern() {
  for (let i = 0; i < 7; i++) {
    let randomizedNumber = 0;
    do {
      randomizedNumber = Math.ceil(Math.random() * 7);
    } while (randomizedNumber == 0);
    pattern[i] = randomizedNumber;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 523.25,
  2: 587.33,
  3: 659.26,
  4: 698.46,
  5: 783.99,
  6: 880.0,
  7: 987.77,
};

function playTone(btn, len) {
  if (btn == 1) {
    o.frequency.value = freqMap[1];
    m.frequency.value = freqMap[3];
    n.frequency.value = freqMap[5];
  } else if (btn == 2) {
    o.frequency.value = freqMap[5];
    m.frequency.value = freqMap[7];
    n.frequency.value = freqMap[2];
  } else if (btn == 3) {
    o.frequency.value = freqMap[7];
    m.frequency.value = freqMap[2];
    n.frequency.value = freqMap[4];
  } else if (btn == 4) {
    o.frequency.value = freqMap[4];
    m.frequency.value = freqMap[6];
    n.frequency.value = freqMap[1];
  } else if (btn == 5) {
    o.frequency.value = freqMap[6];
    m.frequency.value = freqMap[1];
    n.frequency.value = freqMap[3];
  } else if (btn == 6) {
    o.frequency.value = freqMap[2];
    m.frequency.value = freqMap[4];
    n.frequency.value = freqMap[6];
  } else if (btn == 7) {
    o.frequency.value = freqMap[3];
    m.frequency.value = freqMap[5];
    n.frequency.value = freqMap[7];
  }
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    if (btn == 1) {
      o.frequency.value = freqMap[1];
      m.frequency.value = freqMap[3];
      n.frequency.value = freqMap[5];
    } else if (btn == 2) {
      o.frequency.value = freqMap[5];
      m.frequency.value = freqMap[7];
      n.frequency.value = freqMap[2];
    } else if (btn == 3) {
      o.frequency.value = freqMap[7];
      m.frequency.value = freqMap[2];
      n.frequency.value = freqMap[4];
    } else if (btn == 4) {
      o.frequency.value = freqMap[4];
      m.frequency.value = freqMap[6];
      n.frequency.value = freqMap[1];
    } else if (btn == 5) {
      o.frequency.value = freqMap[6];
      m.frequency.value = freqMap[1];
      n.frequency.value = freqMap[3];
    } else if (btn == 6) {
      o.frequency.value = freqMap[2];
      m.frequency.value = freqMap[4];
      n.frequency.value = freqMap[6];
    } else if (btn == 7) {
      o.frequency.value = freqMap[3];
      m.frequency.value = freqMap[5];
      n.frequency.value = freqMap[7];
    }
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var m = context.createOscillator();
var n = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
m.connect(g);
m.start(0);
n.connect(g);
n.start(0);

function lightButton(btn) {
  document.getElementById("gamePlayBtn" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("gamePlayBtn" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime / (progress + 1));
    setTimeout(clearButton, clueHoldTime / (progress + 1), btn);
  }
}

function playClueSequence() {
  document.getElementById("turn").innerHTML = progress + 1;
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime / (progress + 1); //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime / (progress + 1);
    delay += cluePauseTime / (progress + 1);
  }
  timer = 10;
}

function winGame() {
  stopGame();
  $('#winModal').modal('show');
}

function loseGame() {
  stopGame();
  $('#loseModal').modal('show');
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) winGame();
      else {
        progress++;
        playClueSequence();
      }
    } else guessCounter++;
  } else if (mistakeCounter >= 2) {
    mistakeCounter++;
    document.getElementById("mistakes").innerHTML = mistakeCounter;
    loseGame();
  } else {
    mistakeCounter++;
    document.getElementById("mistakes").innerHTML = mistakeCounter;
    alert(
      "I think you got it wrong ... You have " + (3 - mistakeCounter) + " chances remain. Try again at where you left off."
    );
  }
}

function gameTimer() {
  timer = timer - 0.1;
  document.getElementById("timer").innerHTML = "0" + Math.floor(timer);
  document.getElementById("progressBarTimer").style = "width: " + timer/timerPerRound*100 + "%";
  if (timer <= 0) {
    stopGame();
    $('#timeOutModal').modal('show');
  }
}

function resetTimer() {
  clearInterval(mainTimer);
  timer = timerPerRound;
  document.getElementById("timer").innerHTML = timer;
  document.getElementById("progressBarTimer").classList.remove("progress-bar-striped", "progress-bar-animated");
  document.getElementById("progressBarTimer").style = "width: 100%";
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function brightenPlayButton() {
  var childrens = document.getElementById("gamePlayArea").children;
  var op = 0;
  clearInterval(buttonTimer);
  buttonTimer = setInterval(frame, 50);
  function frame() {
    if (op == 1) {
      clearInterval(buttonTimer);
    } else {
      op += 0.1;
      for(var i = 0, length = childrens.length; i < length; i++) {
          childrens[i].style.opacity = op;
      }
    }
  }
}

function shufflePlayButtonText() {
  var shuffledTexts = shuffleArray(["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]);
  document.getElementById("gamePlayBtn1").innerHTML = shuffledTexts[0];
  document.getElementById("gamePlayBtn2").innerHTML = shuffledTexts[1];
  document.getElementById("gamePlayBtn3").innerHTML = shuffledTexts[2];
  document.getElementById("gamePlayBtn4").innerHTML = shuffledTexts[3];
  document.getElementById("gamePlayBtn5").innerHTML = shuffledTexts[4];
  document.getElementById("gamePlayBtn6").innerHTML = shuffledTexts[5];
  document.getElementById("gamePlayBtn7").innerHTML = shuffledTexts[6];
  brightenPlayButton();
}

function resetPlayButtonText() {
  document.getElementById("gamePlayBtn1").innerHTML = "Red";
  document.getElementById("gamePlayBtn2").innerHTML = "Orange";
  document.getElementById("gamePlayBtn3").innerHTML = "Yellow";
  document.getElementById("gamePlayBtn4").innerHTML = "Green";
  document.getElementById("gamePlayBtn5").innerHTML = "Blue";
  document.getElementById("gamePlayBtn6").innerHTML = "Indigo";
  document.getElementById("gamePlayBtn7").innerHTML = "Violet";
  brightenPlayButton();
}

function changePlayButtonText() {
  var checkBox = document.getElementById("randomizeTextCheckbox");

  if (checkBox.checked == true){
    shufflePlayButtonText();
  } else {
    resetPlayButtonText();
  } 
}