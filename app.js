const dino = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },

    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];
    // Create Dino Constructor
const Dino = function(species,weight,height,diet,where,when,fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where =where;
    this.when = when;
    this.fact = fact;
}

    // Create Dino Objects
const tri = new Dino("Triceratops",13000,114,"herbavor","North America","Late Cretaceous","First discovered in 1889 by Othniel Charles Marsh");
const tyr = new Dino("Tyrannosaurus Rex",11905,144,"carnivor", "North America","Late Cretaceous","The largest known skull measures in at 5 feet long.");
const ank = new Dino("Anklyosaurus",10500,55,"herbavor","North America","Late Cretaceous","Anklyosaurus survived for approximately 135 million years.");
const bra = new Dino("Brachiosaurus",70000,372,"herbavor","North America","Late Jurasic","An asteroid was named 9954 Brachiosaurus in 1991.");
const steg= new Dino("Stegosaurus",11600,79,"herbavor","North America, Europe, Asia","Late Jurasic to Early Cretaceous","The Stegosaurus had between 17 and 22 seperate places and flat spines.");
const ela= new Dino("Elasmosaurus",16000,59,"carnivor","North America","Late Cretaceous","Elasmosaurus was a marine reptile first discovered in Kansas.");
const pte= new Dino("Pteranodon",44,20,"carnivor","North America","Late Cretaceous","Actually a flying reptile, the Pteranodon is not a dinosaur.");
const pig= new Dino("Pigeon",0.5,9,"herbavor","World Wide","Holocene","All birds are living dinosaurs.");

/*
const dinoObj = []
dino.forEach(function(elm,index,arry){
    const dino1 = new Dino(
        elm.species,
        elm.weight,
        elm.height,
        elm.diet,
        elm.where,
        elm.when,
        elm.fact
    );

    dinoObj.push(dino1);
})
*/

    // Create Human Object

//let formInput = Array.from(document.querySelectorAll("#dino-compare input")).reduce((acc,input) => ({...acc,[input.id]: input.value}),{});

let name ='';
const submit = document.querySelector("#btn");
submit.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    console.log(name);
})

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
