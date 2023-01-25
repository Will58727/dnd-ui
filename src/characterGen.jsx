import React from 'react';
import genCharacter from './logic';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterGen() {
  return (
    <div>
                            <p className='genTextOne'>the D&D character generator will randomly generate a character for you to use in your next D&D campaign!

it'll handle any system to get that character converted to the D&D 5th edition stats (so you can use it on any system or faction),

to get that character converted to the D&D 5th edition stats (so you can use it on any system or faction), it'll handle any conversion system (from chaos to science fantasy, to rpg/RPG/Sci-fi) and convert the converted data to the stat that suits the character you want,

to any conversion system (from chaos to science fantasy, to rpg/RPG/Sci-fi) and convert the converted data to the stat that suits the character you want, it'll handle converting spells, spells the GM needs to run a dungeon crawler, spells that are specific to your character,

it'll handle converting stats, magic items that are specific to the character, it'll handle converting feats,

it'll handle converting psionics,

it'll handle converting weapons and equipment and converting them to the D&D stats.</p>


      <Link to="/Character">
        <button>Start your adventure</button>
      </Link>
    </div>
  );
}

