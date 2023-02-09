import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    console.log('promiseComponent');

    //renderiza el hero nada mas
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }


    const renderTwoHeros = (hero1, hero2) =>{
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    }


    const renderError = (error) => {
        element.innerHTML = `
                <h1>Error</h1>
                <h3>${error}</h3>
            `;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371f97c29d020f1e1f6d';

    
    //USAR LA PROMESA

    findHero(id1)
        .then( (hero1) => {            
            findHero(id2)
                .then( hero2 => {
                    renderTwoHeros(hero1, hero2)
                })
                .catch(renderError); //captura error 2
        }) 
        .catch(renderError);//captura error 1


    //findHero(id1)
        //.then(cualquierNombre => renderHero(cualquierNombre));
     //   .then(renderHero) //esto es lo mismo que arriba en el caso que los argumentos de la izquierda los use en el mismo orden que en el pase a funcion de la derecha. Es decir lo que devuelve la promesa lo envia a la funcion.
     //   .catch(error => renderError(error));


}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
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

