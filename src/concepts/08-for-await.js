import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    console.log('forAwaitComponent');

    const id = '5d86371f233c9f2425f16916';

    const heroIds = heroes.map(hero => hero.id);

    console.log(heroIds);

    const heroPromises = getHeroesAsync(heroIds);

    //!El caso de uso es muy especifico, por lo general se puede usar await promise.all
    for await( const hero of heroPromises ){
        element.innerHTML += `${hero.name} <br>`
    }

    


    // if (await getHeroAsync(id)){
    //     element.innerHTML= 'Si existe ese héroe';
    //     return;
    // }

    // element.innerHTML = 'No existe el héroe';
    

    
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
//!Regresa un arreglo de PROMESAS
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}