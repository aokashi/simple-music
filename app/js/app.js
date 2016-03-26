console.log("アプリの処理開始");

function installServiceWorker(){
  navigator.serviceWorker.register("js/sw.js").then(registration => {
    console.log("The service worker has been registered", registration);
  }).catch(error => {
    console.log(error);
  });
}

function toggleMusic(){
  console.log("再生ぼたんがおされたよ");
  var player = document.querySelector("#player");
  var button = document.querySelector("#toggleButton");
  if(player.paused){
    player.play();
    button.innerHTML = "一時停止！";
  }else{
    player.pause();
    button.innerHTML = "　　再生！";
  }
};

function stopMusic(){
  console.log("停止ボタンが押されたよ");
  var player = document.querySelector("#player");
  var button = document.querySelector("#toggleButton");
  player.currentTime = 0;
  player.pause();
  button.innerHTML = "　　再生！";
};

function setMusic(){
  console.log("設定ぼたんがおされたよ");
  var player = document.querySelector("#player");
  player.currentTime += 10;
};

function boostMusic(){
  console.log("倍速ボタンがおされたよ");
  var player = document.querySelector("#player");
  var slider = document.querySelector("#boost");
  player.playbackRate = slider.value;
};

function changeVolume(){
  var player = document.querySelector("#player");
  var slider = document.querySelector("#volume");
  player.volume = slider.value;
};

function init(){
  var player = document.querySelector("#player");
  console.log(player);
  
  var toggleButton = document.querySelector("#toggleButton");
  toggleButton.addEventListener("click", toggleMusic);
  var stopButton = document.querySelector("#stopButton");
  stopButton.addEventListener("click", stopMusic);
  var setButton = document.querySelector("#setButton");
  setButton.addEventListener("click", setMusic);
  var boostSlider = document.querySelector("#boost");
  boostSlider.addEventListener("change", boostMusic);
  var volumeSlider = document.querySelector("#volume");
  volumeSlider.addEventListener("change", changeVolume);
};

window.addEventListener("load", event =>{
  installServiceWorker();
  init();
});
