const dino = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh",
        "image":"images/triceratops.png"
    },

    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long.",
        "image":"images/tyrannosaurus rex.png"
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years.",
        "image":"images/anklyosaurus.png"
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
        "image":"images/brachiosaurus.png"

    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "image":"images/stegosaurus.png"
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "image":"images/elasmosaurus.png"
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "image":"images/pteranodon.png"
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs.",
        "image":"images/pigeon.png"

    }
];

//const image1= /Users/mattdavz/Documents/Udacity/Dino/Javascript-master/images/pigeon.png;


    // Create Dino Constructor
const Dino = function(species,weight,height,diet,where,when,fact,image){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where =where;
    this.when = when;
    this.fact = fact;
    this.image = image;
}

    // Create Dino Objects

const dinoObj = []
dino.forEach(function(elm){
    const dino1 = new Dino(
        elm.species,
        elm.weight,
        elm.height,
        elm.diet,
        elm.where,
        elm.when,
        elm.fact,
        elm.image
    );

    dinoObj.push(dino1);
})


    // Create Human Object
    height = 0;
    species = '';
    image = "images/human.png"
const human = {species, weight, diet, height, image};



    // Use IIFE to get human data from form

    const submit = document.querySelector("#btn");
    submit.addEventListener("click", () => {
        let inchesInput=document.querySelector("#inches").value;
        let hInches = inchesInput === '' ? 0 : parseInt(inchesInput);
        let feetInput = document.querySelector("#feet").value;
        let hFeet= feetInput === '' ? 0 : parseInt(feetInput);
        human.species = document.querySelector("#name").value;
        human.weight = document.querySelector("#weight").value;
        human.diet = document.querySelector("#diet").value;
        human.height = hFeet*12+hInches;
       
        dinoObj.splice(4,0,human);
    });



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
function  compWeight() {
        hWeight = human.weight;
        dWeight = tri.weight;
    if (hWeight>dWeight){
        return ("WOAH you weigh "+(hWeight-dWeight)+"lbs more than the "+tri.species+"!" )
    } else {
        return ("The "+tri.species+" weighs "+(dWeight-hWeight)+"lbs more than you!")
    }
};
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
function compHeight() {
    hHeight = human.height;
    dHeight = tri.height;
    if (hHeight>dHeight){
        return ("WOAH you're "+(hHeight-dHeight)+" inches taller than "+tri.species+"!");
    } else {
        return ("The "+tri.species+" is "+(dHeight-hHeight)+" inches taller than you!")
    }

};
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
function compDiet(){
    hDiet = human.diet;
    dDiet = tri.diet;

};

    // Generate Tiles for each Dino in Array
const parentDiv = document.querySelector("#grid");
function divInner (){
 
}
const form = document.querySelector("#dino-compare");
submit.addEventListener('click', function(){
    form.style.display="none";
    const div = document.createElement("div");
        
    for (i=0; i<=9; ++i) {
        const header = document.createElement('h2');
        const iImage = document.createElement('img');
        const para = document.createElement('p');
        const div = document.createElement("div");
        const dName = document.getElementById('dName');
        const hName = document.getElementById('hName');
        const dHeight = document.getElementById('dHeight');
        const heightDiff = document.getElementById('heightDiff');
        const hCHeight = document.getElementById('hCHeight');
        const dWeight = document.getElementById('dWeight');
        const weightDiff = document.getElementById('weightDiff');
        const hCWeight = document.getElementById('hCWeight');
        const dDiet = document.getElementById('dDiet');
        const hDiet = document.getElementById('hDiet');

       

        div.setAttribute("id","dino"+i);
       
        div.classList.add("grid-item")
        parentDiv.appendChild(div);
        header.textContent = dinoObj[i].species; // ERROR HERE AFTER BUTTON PRESS *SOMETHING TO DO WITH HUMAN OBJECT*
        iImage.src = dinoObj[i].image;
        para.textContent = dinoObj[i].fact;
        div.append(header, iImage, para);
        // eventlistener for comparing overlay 



        div.addEventListener('click', function() {
            const divId = this.getAttribute("id");
            if (divId===0){
                
                    dName.textContent = "ELLO";

            }
        })
    
        
    };
    
});
     

// On button click, prepare and display infographic

