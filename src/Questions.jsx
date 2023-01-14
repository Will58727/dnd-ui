import React, { useState } from "react" 
import {genCharacter} from "./Logic"
const Questions = () => {

const [characterInfo, setCharacterInfo] = useState("")
    return(
        <div>
            <div id="Class">
                <h3>Do you prefer to fight up close or at a distance?</h3>
                <button onClick={chosenClass} className="classChoice">How will you fight?</button>
                
            </div>

            <div id="Race">
                <h3>What is your race</h3>
                <button onClick={chosenRace()} className="raceChoice">from which race will you hail?</button>
            </div>

            <div id="Skill">
                <h3>What skills have you learned ?</h3>
                <button onClick={chosenSkill} className="skillChoice">What skills have you learned in your travels?</button>
            </div>
        </div>

    )
}
export default Questions