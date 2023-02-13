import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) =>{
    console.log('asyncComponent');

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    console.log('Inicio del componente');
    
    findHero(id1)
        //.then(console.log)
        .then(name => element.innerHTML = name)
        .catch( error => element.innerHTML = error)

    console.log('Fin del componente');
    
}


/**
 * 
 * @param {String} id 
 * @param {Promise<String>}
 */
const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw ` <h3>El Heroe con el is ${id} no se encuentra</h3>`;

    return hero.name;
}