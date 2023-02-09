import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) =>{
    console.log('promiseComponent');



}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise( (resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve (hero);
            return;
        } 
        reject(`El heroe con el ID ${id} no se encuentra `);
    });
    
}


// const findHero = (id) => {

//     const promise = new Promise( (resolve, reject) => {
//         const hero = heroes.find(hero => hero.id === id);

//         if (hero) {
//             resolve (hero);
//             return;
//         } 
//         reject(`El heroe con el ID ${id} no se encuentra `);
//     });

//     return promise;
// }

