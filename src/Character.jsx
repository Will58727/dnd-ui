import React, { useState } from 'react';
import * as logic from './logic'





function Character() {
  return (
    <div className='container'>
        <row class="row" justify-content-center align-items-center g-2>
            <div class="row">
            {logic.chosenClass()}
            </div>
            <div class="row">
            {logic.chosenRace()}
            </div>
            <div class="row">
            {logic.chosenSkill()}
            </div>
        </row>
    </div>
  );
}

export default Character;


