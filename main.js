let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
 

  {
    name: "Pehli Mohobat",
    artist: "Darshan Raval",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./Music/1.mp3",
  },


  {
    name: "Jab Tak",
    artist: "Arijit Singh",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./Music/2.mp3",
  },


  {
    name: "Ik Vaaria",
    artist: "Arijit Singh",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./Music/3.mp3",
  },


  {
    name: "tere bina",
    artist: "Zaeden",
    image: "./Nucleus/image/cd/4.jpg",
    path: "./Music/4.mp3",
  },

  {
    name: "Chann vi gavah",
    artist: "",
    image: "./Nucleus/image/cd/5.jpg",
    path: "./Music/5.mp3",
  },


  {
    name: "Dekha Hazaro Dafa",
    artist: "Arijit Singh",
    image: "./Nucleus/image/cd/6.jpg",
    path: "./Music/6.mp3",
  },

  {
    name: "Gazab ka hai din",
    artist: "Jubin Nauteyal",
    image: "./Nucleus/image/cd/7.jpeg",
    path: "./Music/7.mp3",
  },


  {
    name: "Malang",
    artist: "",
    image: "./Nucleus/image/cd/8.jpg",
    path: "./Music/8.mp3",
  },

  {
    name: "Lost Stories",
    artist: "Zaeden",
    image: "./Nucleus/image/cd/9.jpg",    
    path: "./Music/9.mp3",
  },


  {
    name: "Manjha",
    artist: "",
    image: "./Nucleus/image/cd/10.jpg",
    path: "./Music/10.mp3",
  },

  {
    name: "Mashup",
    artist: "",
    image: "./Nucleus/image/cd/11.jpg",
    path: "./Music/11.mp3",
  },


  {
    name: "Ed Sheren Mashup",
    artist: "Zaeden",
    image: "./Nucleus/image/cd/12.jpg",
    path: "./Music/12.mp3",
  },


  {
    name: "Afeemi",
    artist: "Ayushman Khurana",
    image: "./Nucleus/image/cd/13.jpg",
    path: "./Music/13.mp3",
  },


  {
    name: "Tune joh na kaha",
    artist: "",
    image: "./Nucleus/image/cd/14.jpg",
    path: "./Music/14.mp3",
  },

  {
    name: "Kajra",
    artist: "",
    image: "./Nucleus/image/cd/15.jpg",
    path: "./Music/15.mp3",
  },


  {
    name: "Chal Bombay",
    artist: "Divine",
    image: "./Nucleus/image/cd/16.jpg",
    path: "./Music/16.mp3",
  },

  {
    name: "Nazma Nazma",
    artist: "Ayushman Khurana",
    image: "./Nucleus/image/cd/17.jpg",
    path: "./Music/17.mp3",
  },


  {
    name: "Qafiraana",
    artist: "Arijit Singh",
    image: "./Nucleus/image/cd/18.jpg",
    path: "./Music/18.mp3",
  },
  

  {
    name: "Mere Soneyaa",
    artist: "Arijit Singh",
    image: "./Nucleus/image/cd/19.jpg",    
    path: "./Music/19.mp3",
  },

  {
    name: "Duniyaa",
    artist: "",
    image: "./Nucleus/image/cd/20.jpg",
    path: "./Music/20.mp3",
  },


  {
    name: "Emptiness",
    artist: "Gajendra Verma",
    image: "./Nucleus/image/cd/21.jpg",
    path: "./Music/21.mp3",
  },


  {
    name: "Koi vi nahi",
    artist: "",
    image: "./Nucleus/image/cd/22.jpg",
    path: "./Music/22.mp3",
  },

  {
    name: "Lambergini",
    artist: "",
    image: "./Nucleus/image/cd/23.jpg",
    path: "./Music/23.mp3",
  },


  {
    name: "Love me thoda aur",
    artist: "",
    image: "./Nucleus/image/cd/24.jpg",
    path: "./Music/24.mp3",
  },

  {
    name: "Raabta",
    artist: "",
    image: "./Nucleus/image/cd/25.jpg",
    path: "./Music/25.mp3",
  },


];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let violet = Math.floor(Math.random() * 256) + 64;


  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + "," + violet + ",)";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


