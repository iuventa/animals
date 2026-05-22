//object
let bellboy = {
    name: "givi",
    age: 44,
    experience: 20,
    gamodzaxeba: function(){
        alert("movedi");
    }
}

function Bellboy(firstname, bellboyage, bellboyexperience){
    this.name = firstname;
    this.age = bellboyage;
    this.experience = bellboyexperience;
}

let bellboy2 = new Bellboy("luka", 34, 1);
console.log(bellboy2.name);




// let bellboy2 = {
//     name: "maxo",
//     age: 24,
//     experience: 2,
//     gamodzaxeba: function(){
//         alert("movedi");
//     }
// }

// console.log(bellboy.name, bellboy2.name);
// bellboy.gamodzaxeba();

document.addEventListener("keydown", function(a){
    console.log(a.key);
});