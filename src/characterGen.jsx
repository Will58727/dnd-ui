import React from 'react';
import genCharacter from './logic';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterGen() {
  return (
    <div>
                            <p className='genText'>the D&D character generator will randomly generate a character for you to use in your next D&D campaign!

it'll handle any system to get that character converted to the D&D 5th edition stats (so you can use it on any system or faction),

to get that character converted to the D&D 5th edition stats (so you can use it on any system or faction), it'll handle any conversion system (from chaos to science fantasy, to rpg/RPG/Sci-fi) and convert the converted data to the stat that suits the character you want,

to any conversion system (from chaos to science fantasy, to rpg/RPG/Sci-fi) and convert the converted data to the stat that suits the character you want, it'll handle converting spells, spells the GM needs to run a dungeon crawler, spells that are specific to your character,

it'll handle converting stats, magic items that are specific to the character, it'll handle converting feats,

it'll handle converting psionics,

it'll handle converting weapons and equipment and converting them to the D&D stats.

it'll handle adding in additional options (like weapon class, or penalties to armor).

it'll handle identifying and evaluating stats from the character sheets the GM has provided.

it'll also include an auto-calculation of all stats based on each class so you don't have to do math to calculate your stats.

it's also portable - you can move the data to any system that uses D&D stats, without modifying any data on your character.

it's a module - but it's a very small module that installs directly into the module format so you can use it on any system or all systems as long as the module supports the module format.

The creation of this module was made possible by Andrew MacDonald and others on the D&D forums. There are other modules out there like this, but most modules are really big. This was a 10 minute module to evaluate this idea.

Thanks to all the people who donated!

Just to clarify - there are two ways to play. You can play as a character or you can play as the GM. Either way you play is the best, but I'm glad you guys wanted to play as characters.
                    </p>
      <Link to="/Character">
        <button>Start your adventure</button>
      </Link>
    </div>
  );
}

