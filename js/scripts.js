let animals = document.querySelectorAll(".animal");

// document.addEventListener("keydown", function(a){
//     console.log(a.key);
    
//     let soundsrc;
//     if(a.key == "D" || a.key == "d"){
//             soundsrc = "assets/audio/dog.wav";
//        }
//        else if(a.key == "P" || a.key == "p"){
//             soundsrc = "assets/audio/puppy.wav";
//        }
//        else if(a.key == "L" || a.key == "l"){
//             soundsrc = "assets/audio/lion.wav";
//        }
//        else if(a.key == "V" || a.key == "v"){
//             soundsrc = "assets/audio/saddonkey.wav"
//        }
//        else if(a.key == "C" || a.key == "c"){
//             soundsrc = "assets/audio/caw.wav";
//        }
//        else if(a.key == "K" || a.key == "k"){
//             soundsrc = "assets/audio/cat.wav";
//        }
//        else if(a.key == "A" || a.key == "a" ){
//             soundsrc = "assets/audio/angrycat.wav";
//        }
//        let sound = new Audio(soundsrc);
//        sound.play();

// });
let currentSound = null;
function playsound(animalname){
    let soundsrc;
    if(animalname == "dog"){
            soundsrc = "assets/audio/dog.wav";
       }
       else if(animalname == "puppy"){
            soundsrc = "assets/audio/puppy.wav";
       }
       else if(animalname == "lion"){
            soundsrc = "assets/audio/lion.wav";
       }
       else if(animalname == "donkey"){
            soundsrc = "assets/audio/saddonkey.wav"
       }
       else if(animalname == "cow"){
            soundsrc = "assets/audio/caw.wav";
       }
       else if(animalname == "cat"){
            soundsrc = "assets/audio/cat.wav";
       }
       else if(animalname == "angrycat"){
            soundsrc = "assets/audio/angrycat.wav";
       }
       else if(animalname == "duck"){
            soundsrc = "assets/audio/duck.mp3";
       }
       else if(animalname == "frog"){
            soundsrc = "assets/audio/frog.mp3";
       }
       else if(animalname == "sheep"){
            soundsrc = "assets/audio/sheep.mp3";
       }
       else if(animalname == "goat"){
            soundsrc = "assets/audio/goat.mp3";
       }
       else if(animalname == "rooster"){
            soundsrc = "assets/audio/rooster.mp3";
       }
       else if(animalname == "monkey"){
            soundsrc = "assets/audio/monkey.mp3";
       }
       else if(animalname == "bear"){
            soundsrc = "assets/audio/bear.mp3";
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



// let catsound = new Audio("assets/audio/cat.wav");
// catsound.play();