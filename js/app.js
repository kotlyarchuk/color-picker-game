var blocks = document.querySelectorAll('.block');
var color = document.querySelector('.color-name');
var title = document.querySelector('.title');
var canyou = document.querySelector('.canyou');
var newGame = document.querySelector('.newgame');
var easy = document.querySelector('.easy');
var hard = document.querySelector('.hard');
var gameOver = false;
var correct = "";
var blocksCount = 6;
var gameDiff = "hard";



colorBlocks();
startGame(gameDiff);

for (var i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", checkIfCorrect);
}

newGame.addEventListener("click", function(){
  startGame(gameDiff);
});

easy.addEventListener("click", function(){
  gameDiff = "easy";
  startGame(gameDiff);
  hard.style.background = "#fff";
  hard.style.color = "rgb(60, 120, 180)";
  this.style.background = "rgb(60, 120, 180)";
  this.style.color = "#fff";
});

hard.addEventListener("click", function(){
  gameDiff = "hard";
  startGame(gameDiff);
  easy.style.background = "#fff";
  easy.style.color = "rgb(60, 120, 180)";
  this.style.background = "rgb(60, 120, 180)";
  this.style.color = "#fff";
});




function checkIfCorrect(){
  if(!gameOver){
    if(this === correct){
      canyou.classList.toggle("hide");
      color.innerHTML = "CORRECT!";
      title.style.background = correct.style.background;
      gameOver = true;
    }
    else {
      this.style.visibility = "hidden";
    }
  }
}

function reset(){
  gameOver = false;
  title.style.background = "rgb(60, 120, 180)";
  canyou.style.visibility = "visible";
  generateGame(blocksCount);
  colorBlocks();
  showAllBlocks();
}

function generateColor(){
  var result;
  result = generateNum() + ", " + generateNum() + ", " + generateNum();
  return result;
}

function colorBlocks(){
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.background = "rgb("+generateColor()+")";
  }
}

function showAllBlocks(){
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.visibility = "visible";
  }
}

function generateNum(){
  return Math.ceil( Math.random()*256 );
}

function generateGame(count){
  correct = blocks[ Math.floor( Math.random()*count ) ];
  console.log(correct);
  color.innerHTML = correct.style.background;
}

function startGame(diff){
  if(diff === "easy"){
    blocksCount = 3;
    reset();
    for (var i = 3; i < blocks.length; i++) {
      blocks[i].style.visibility = "hidden";
    }
  } else{
    blocksCount = 6;
    reset();
  }
}
