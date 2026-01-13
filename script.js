let aud_F5   = new Audio("key/F5.mp3");
let aud_Fsh5 = new Audio("key/Gb5.mp3");
let aud_G5   = new Audio("key/G5.mp3");
let aud_Gsh5 = new Audio("key/Ab5.mp3");
let aud_A5   = new Audio("key/A5.mp3");
let aud_Ash5 = new Audio("key/Bb5.mp3");
let aud_B5   = new Audio("key/B5.mp3");
let aud_C6   = new Audio("key/C6.mp3");
let aud_Csh6 = new Audio("key/Db6.mp3");
let aud_D6   = new Audio("key/D6.mp3");
let aud_Dsh6 = new Audio("key/Eb6.mp3");
let aud_E6   = new Audio("key/E6.mp3");
let aud_F6   = new Audio("key/F6.mp3");
let aud_Fsh6 = new Audio("key/Gb6.mp3");
let aud_G6   = new Audio("key/G6.mp3");
let aud_Gsh6 = new Audio("key/Ab6.mp3");
let aud_A6   = new Audio("key/A6.mp3");
let aud_Ash6 = new Audio("key/Bb6.mp3");
let aud_B6   = new Audio("key/B6.mp3");
let key_F5   = document.querySelector("#k6");

let key_Fsh5 = document.querySelector("#k7");
let key_G5   = document.querySelector("#k8");
let key_Gsh5 = document.querySelector("#k9");
let key_A5   = document.querySelector("#k10");
let key_Ash5 = document.querySelector("#k11");
let key_B5   = document.querySelector("#k12");
let key_C6   = document.querySelector("#k13");
let key_Csh6 = document.querySelector("#k14");
let key_D6   = document.querySelector("#k15");
let key_Dsh6 = document.querySelector("#k16");
let key_E6   = document.querySelector("#k17");
let key_F6   = document.querySelector("#k18");
let key_Fsh6 = document.querySelector("#k19");
let key_G6   = document.querySelector("#k20");
let key_Gsh6 = document.querySelector("#k21");
let key_A6   = document.querySelector("#k22");
let key_Ash6 = document.querySelector("#k23");
let key_B6   = document.querySelector("#k24");


const keyMap = {
  "q": aud_F5,
  "2": aud_Fsh5,
  "w": aud_G5,
  "3": aud_Gsh5,
  "e": aud_A5,
  "4": aud_Ash5,
  "r": aud_B5,

  "t": aud_C6,
  "6": aud_Csh6,
  "y": aud_D6,
  "7": aud_Dsh6,
  "u": aud_E6,
  "i": aud_F6,
  "9": aud_Fsh6,
  "o": aud_G6,
  "0": aud_Gsh6,
  "p": aud_A6,
  "-": aud_Ash6,
  "[": aud_B6
};


const dispKeyMap = {
  "q": key_F5,
  "2": key_Fsh5,
  "w": key_G5,
  "3": key_Gsh5,
  "e": key_A5,
  "4": key_Ash5,
  "r": key_B5,

  "t": key_C6,
  "6": key_Csh6,
  "y": key_D6,
  "7": key_Dsh6,
  "u": key_E6,
  "i": key_F6,
  "9": key_Fsh6,
  "o": key_G6,
  "0": key_Gsh6,
  "p": key_A6,
  "-": key_Ash6,
  "[": key_B6
};


document.addEventListener("keydown", (event) => {
  if (event.repeat) return; 

  const baseAudio = keyMap[event.key];
  const key = dispKeyMap[event.key];

  if (baseAudio && key) {
    const audio = baseAudio.cloneNode(); 
    key.classList.add("active");
    audio.play();
  }
});

document.addEventListener("keyup", (event) => {
  const key = dispKeyMap[event.key];
  if (key) key.classList.remove("active");
});
