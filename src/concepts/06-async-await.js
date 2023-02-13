import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    console.log('asyncAwaitComponent');

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    //!Sirve para manejar el error de la funcion asincrona que estamos manejando por fuera
    try {
        //!Si no le pongo el await me devuelve la PROMESA, pero con el await me devuelve el OBJETO
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }

    


    

}

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `El heroe con id ${id} no se encuentra`;

    return hero;
}