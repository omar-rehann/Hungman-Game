let allcharachter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let allarray = Array.from(allcharachter);
let continer = document.querySelector(".allchar");
allarray.forEach((letter) => {
    let span = document.createElement("span");
    span.className = "charachter";
    let txt = document.createTextNode(letter);
    span.appendChild(txt);
    continer.appendChild(span);
})
let words = {
    programing: ["paython", "html", "css", "javascript", "java", "bootstrap", "tilwand", "github"],
    skills: ["reading", "sleeping", "walking", "search"],
    pepole: ["omar rehan", "ahmed rehan", "ans mowafy", "ali elsayed"],
    car: ["bmw", "ferari", "toyata", 'taxi', "keya", "honda"],
    Team: ["germany", "france", "usa", "itilan", "united"]
}
let allkeys = Object.keys(words);
let numberindexcategries = Math.floor(Math.random() * allkeys.length); //  رقم القسم او معني اخر هو مكانه فين ف Array
let name_numberindexcategries = allkeys[numberindexcategries]; //  هنا جبت اسم القسم نفسه 
let word_inside_categores = words[name_numberindexcategries]; //  جبت كل الكلمات المتاحه داخل القسم 
let onewordindex = Math.floor(Math.random() * word_inside_categores.length); //  جبت ال index بتاع الكلمه العشوايه 
let wordtext = word_inside_categores[onewordindex]; //   الكلمه نفسها هنا


// inner name categories the top page:
let namepage = document.querySelector(".name_categories");
namepage.innerHTML = `Categories:${name_numberindexcategries}`;

// Create a group of building elements along the length of the word
let part_three = document.querySelector(".number_all_char");
let all = Array.from(wordtext);
all.forEach((let) => {
    let twoel = document.createElement("span");
    if (let == "") {
        twoel.className = "update"
    }
    part_three.appendChild(twoel);
})
let all_span = document.querySelectorAll(".number_all_char span");
let numberfalse = 0;
let sectiongame = document.querySelector(".gamming")

document.addEventListener("click", (e) => {
    let status = false;
    if (e.target.className == "charachter") {
        e.target.classList.add("cliked");

    }
    let letterchose = e.target.innerHTML.toLowerCase();
    all.forEach((wordletter, wordinex) => {
        if (letterchose === wordletter) {
            status = true;
            all_span.forEach((spanel, spanindex) => {
                if (spanindex === wordinex) {
                    spanel.innerHTML = letterchose;

                }
            })
        }
    })
    if (status !== true) {
        numberfalse++;
        sectiongame.classList.add(`wrong-${numberfalse}`);

        if (numberfalse === 8) {
            continer.innerHTML = "Game Over";
        }
    }



})