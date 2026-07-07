let music = document.querySelectorAll(".music");


let currentSound = null;
function playsound(musicname){
    let soundsrc;
    if(musicname == "accordeon"){
            soundsrc = "assets/audio/music/accordeon.mp3";
       }
       else if(musicname == "arfa"){
            soundsrc = "assets/audio/music/arfa.mp3";
       }
       else if(musicname == "drum"){
            soundsrc = "assets/audio/music/drum.mp3";
       }
       else if(musicname == "guitar"){
            soundsrc = "assets/audio/music/guitar.mp3"
       }
       else if(musicname == "panduri"){
            soundsrc = "assets/audio/music/panduri.mp3";
       }
       else if(musicname == "piano"){
            soundsrc = "assets/audio/music/piano.mp3";
       }
       else if(musicname == "angrycat"){
            soundsrc = "assets/audio/music/piano.mp3";
       }
       else if(musicname == "qsiloponi"){
            soundsrc = "assets/audio/music/xylophone.mp3";
       }
       else if(musicname == "violin"){
            soundsrc = "assets/audio/music/violin.mp3";
       }
       else if(musicname == "maracas"){
            soundsrc = "assets/audio/music/maracas.mp3";
       }
       else if(musicname == "tamburine"){
            soundsrc = "assets/audio/music/tamburine.mp3";
       }
       else if(musicname == "trumpet"){
            soundsrc = "assets/audio/music/trumpet.mp3";
       }
       else if(musicname == "flute"){
            soundsrc = "assets/audio/music/flute.mp3";
       }
      
       
       if(!soundsrc) return;

    
    if(currentSound){
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    
    currentSound = new Audio(soundsrc);
    currentSound.play();
}


for(let i = 0; i < music.length; i++){
    console.log(music[i]);
    music[i].addEventListener("click", function(){
        playsound(music[i].getAttribute("musicname"));
    })
}



// let catsound = new Audio("assets/audio/cat.wav");
// catsound.play();