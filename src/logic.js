let classes = ['rouge','warrior','mage']
let race = ['elf','human','dwarf']
let skill = ['acrobatics','animal handling']


//function to choose random word
export function chosenClass() {
        // generate a random value between 1 and 0 multiply
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
        
}

export function chosenRace() {
    // generate a random value between 1 and 0 multiply
    const randomIndex = Math.floor(Math.random() * race.length);
    return race[randomIndex];
    
}

export function chosenSkill() {
    // generate a random value between 1 and 0 multiply
    const randomIndex = Math.floor(Math.random() * skill.length);
    return skill[randomIndex];
    
}

export function genCharacter() {
    const characterTraits = []
    characterTraits.push(chosenClass());
    characterTraits.push(chosenRace());
    characterTraits.push(chosenSkill());
    return characterTraits
}

