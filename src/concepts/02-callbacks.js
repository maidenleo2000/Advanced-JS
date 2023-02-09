import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const calbacksComponent = (element) =>{
    console.log('callbacksComponent');

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    findHero(id1, (error, hero)=> {
        //element.innerHTML = hero?.name || 'No hay heroe';

        //Manejo de errores callbacks
        if (error){
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });
}


/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(heroe => heroe.id ===id);

    //Manejo de errores en callbacks
    if(!hero){
        callback(`No se encuentra el Heroe con el ID ${id}`);
        return; //undefined regresa
    }
    callback(null, hero); //en el callback el primer argumento es el error y el segundo el dato en este caso la variable hero.

}

