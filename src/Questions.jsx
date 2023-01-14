import React, { useState } from "react" 

const Questions = () => {

const [characterInfo, setCharacterInfo] = useState("")
    return(
        <div>
            <div id="Class">
                <h3>Do you prefer to fight up close or at a distance?</h3>
                <button onClick={choiceOne()} className="choice-one">I prefer to be in the middle of the fight</button>
                <button onClick={choiceTwo()} className="choice-two">I prefer to keep my distance</button>
            </div>

            <div id="Race">
                <h3>What is your race</h3>
                <button onClick={choiceThree()} className="choice-three">I am a Human</button>
                <button onClick={choiceFour()} className="Choice-four">I am a Elf</button>
                <button onClick={choiceFive()} className="Choice-five">I am a Dwarf</button>
            </div>

            <div id="Skill">
                <h3>What skills have you learned ?</h3>
                <button onClick={choiceSix()} className="Choice-six">Acrobatics</button>
                <button onClick={choiceSeven()} className="Choice-seven">Animal Handling</button>
            </div>
        </div>

    )
}
export default Questions