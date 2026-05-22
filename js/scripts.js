let animals = document.querySelectorAll(".animal");

document.addEventListener("keydown", function(a){
    console.log(a.key);
    
    let soundsrc;
    if(a.key == "D" || a.key == "d"){
            soundsrc = "assets/audio/dog.wav";
       }
       else if(a.key == "P" || a.key == "p"){
            soundsrc = "assets/audio/puppy.wav";
       }
       else if(a.key == "L" || a.key == "l"){
            soundsrc = "assets/audio/lion.wav";
       }
       else if(a.key == "V" || a.key == "v"){
            soundsrc = "assets/audio/saddonkey.wav"
       }
       else if(a.key == "C" || a.key == "c"){
            soundsrc = "assets/audio/caw.wav";
       }
       else if(a.key == "K" || a.key == "k"){
            soundsrc = "assets/audio/cat.wav";
       }
       else if(a.key == "A" || a.key == "a" ){
            soundsrc = "assets/audio/angrycat.wav";
       }
       let sound = new Audio(soundsrc);
       sound.play();

});

function playsound(letter){
    let soundsrc;
    if(letter == "D"){
            soundsrc = "assets/audio/dog.wav";
       }
       else if(letter == "P"){
            soundsrc = "assets/audio/puppy.wav";
       }
       else if(letter == "L"){
            soundsrc = "assets/audio/lion.wav";
       }
       else if(letter == "V"){
            soundsrc = "assets/audio/saddonkey.wav"
       }
       else if(letter == "C"){
            soundsrc = "assets/audio/caw.wav";
       }
       else if(letter == "K"){
            soundsrc = "assets/audio/cat.wav";
       }
       else if(letter == "A"){
            soundsrc = "assets/audio/angrycat.wav";
       }
       let sound = new Audio(soundsrc);
       sound.play();
}


for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
    animals[i].addEventListener("click", function(){
        playsound(animals[i].innerHTML); //D A B C
    })
}



// let catsound = new Audio("assets/audio/cat.wav");
// catsound.play();