let animals = document.querySelectorAll(".animal");


let currentSound = null;
function playsound(animalname){
    let soundsrc;
    if(animalname == "dog"){
            soundsrc = "assets/audio/animals/dog.wav";
       }
       else if(animalname == "puppy"){
            soundsrc = "assets/audio/animals/puppy.wav";
       }
       else if(animalname == "lion"){
            soundsrc = "assets/audio/animals/lion.wav";
       }
       else if(animalname == "donkey"){
            soundsrc = "assets/audio/animals/saddonkey.wav"
       }
       else if(animalname == "cow"){
            soundsrc = "assets/audio/animals/caw.wav";
       }
       else if(animalname == "cat"){
            soundsrc = "assets/audio/animals/cat.wav";
       }
       else if(animalname == "angrycat"){
            soundsrc = "assets/audio/animals/angrycat.wav";
       }
       else if(animalname == "duck"){
            soundsrc = "assets/audio/animals/duck.mp3";
       }
       else if(animalname == "frog"){
            soundsrc = "assets/audio/animals/frog.mp3";
       }
       else if(animalname == "sheep"){
            soundsrc = "assets/audio/animals/sheep.mp3";
       }
       else if(animalname == "goat"){
            soundsrc = "assets/audio/animals/goat.mp3";
       }
       else if(animalname == "rooster"){
            soundsrc = "assets/audio/animals/rooster.mp3";
       }
       else if(animalname == "monkey"){
            soundsrc = "assets/audio/animals/monkey.mp3";
       }
       else if(animalname == "bear"){
            soundsrc = "assets/audio/animals/bear.mp3";
       }
       
       
       if(!soundsrc) return;

    
    if(currentSound){
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    
    currentSound = new Audio(soundsrc);
    currentSound.play();
}


for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
    animals[i].addEventListener("click", function(){
        playsound(animals[i].getAttribute("animalname"));
    })
}



// let catsound = new Audio("assets/audio/animals/cat.wav");
// catsound.play();