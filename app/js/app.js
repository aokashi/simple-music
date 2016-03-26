console.log("アプリの処理開始");

function installServiceWorker(){
  navigator.serviceWorker.register("js/sw.js").then(registration => {
    console.log("The service worker has been registered", registration);
  }).catch(error => {
    console.log(error);
  });
}

function playMusic(){
  console.log("再生ぼたんがおされたよ");
  var player = document.querySelector("#player");
  var button = document.querySelector("#playButton");
  if(player.paused){
    player.play();
    button.innerHTML = "停止！";
  }else{
    player.pause();
    button.innerHTML = "再生！";
  }
};

function setMusic(){
  console.log("設定ぼたんがおされたよ");
  var player = document.querySelector("#player");
  player.currentTime = 100;
}

function init(){
  var player = document.querySelector("#player");
  console.log(player);
  
  var playButton = document.querySelector("#playButton");
  playButton.addEventListener("click", playMusic);
  var setButton = document.querySelector("#setButton");
  setButton.addEventListener("click", setMusic);
};

window.addEventListener("load", event =>{
  installServiceWorker();
  init();
});
