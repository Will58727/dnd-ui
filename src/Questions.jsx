import React from "react"

const Questions = () => {
//const Set-Stat = () =>
const [characterInfo, setCharacterInfo] = useState(JSON.parse(localStorage.getItem('characterInfo'))
    return(
        <div>
            <div id="Class">
                <h3>Do you prefer to fight up close or at a distance?</h3>
                <button className="choice-one">I prefer to be in the middle of the fight</button>
                <button className="choice-two">I prefer to keep my distance</button>
            </div>

            <div id="Race">
                <h3>What is your race</h3>
                <button className="choice-three">I am a Human</button>
                <button className="Choice-four">I am a Elf</button>
                <button className="Choice-five">I am a Dwarf</button>
            </div>

            <div id="Skill">
                <h3>What skills have you learned ?</h3>
                <button className="Choice-six">Acrobatics</button>
                <button className="Choice-seven">Animal Handling</button>
            </div>
        </div>

    )
}
export default Questions