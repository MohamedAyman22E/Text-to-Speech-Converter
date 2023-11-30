const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpiking = true;


const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;
  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }
  if (text.length > 50) {
    if (synth.speaking && isSpiking) {
      button.innerHTML = "Pause";
      synth.resume();
      isSpiking = false;
    } else {
      button.innerHTML = "Resume";
      synth.pause();
      isSpiking = true;
    }
  } else {
    isSpiking = false;
    button.innerHTML = "Spiking";
  }
  setInterval(() => {
    if (!isSpiking && !synth.speaking) {
      isSpiking = true;
      button.innerHTML = "Convert to speech";
    }
  });
};

button.addEventListener("click", textToSpeech);
