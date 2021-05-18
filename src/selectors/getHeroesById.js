import React from 'react'
import {heroes} from '../data/heroes'

function getHeroesById(id) {
    return(heroes.find(hero=> hero.id===id));
}

export default getHeroesById
