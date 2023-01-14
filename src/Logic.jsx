let class = ['elf','human','dwarf']
let gender = ['male','female']
let skill = ['acrobatics','animal handling']



//function to choose random word
function chooseClass() {
        // generate a random value between 1 and 0 multiply
        const randomIndex = Math.floor(Math.random() * words.length);
        chosenClass = class[randomIndex];
        
}

function chooseGender() {
    // generate a random value between 1 and 0 multiply
    const randomIndex = Math.floor(Math.random() * words.length);
    chosenGender = gender[randomIndex];
    
}

function chooseSkill() {
    // generate a random value between 1 and 0 multiply
    const randomIndex = Math.floor(Math.random() * words.length);
    chosenSkill = skill[randomIndex];
    
}

export default Logic