// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "EK Mulaqat - Altamash ",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg",
  },
  {
    songName: "Haan Tu Hain - KK and Pritam Chakraborty",
    filePath: "./songs/2.mp3",
    coverPath: "./covers/2.jpg",
  },
  {
    songName: "Mann Mera - Gajendra verma",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg",
  },
  {
    songName: "Mera Pyar Tera Pyar - Arijit",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg",
  },
  {
    songName: "Teri Deewani - Kailash kher",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg",
  },
  {
    songName: "Teri Jhuki Nazar - shafaqat amanat ali",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/6.jpg",
  },
  {
    songName: "Thodi Jagah - Arijit Singh, Tanishk Bagchi",
    filePath: "./songs/7.mp3",
    coverPath: "./covers/7.jpg",
  },
  {
    songName: "Tu Meri Shab Hai - kk",
    filePath: "./songs/8.mp3",
    coverPath: "./covers/8.jpg",
  },
  {
    songName: "Tum Hi Aana - jubin nautiyal, payal dev",
    filePath: "./songs/9.mp3",
    coverPath: "./covers/9.jpg",
  },
  {
    songName: "Aapki Nazron Ne Samjha - sanam",
    filePath: "./songs/10.mp3",
    coverPath: "./covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});

// listen to events
audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemplay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `./songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.duration = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.duration = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.duration = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
