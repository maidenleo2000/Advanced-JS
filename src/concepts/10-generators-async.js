import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async (element) =>{
    console.log('generatorsAsyncComponent');

    const heroGenerator = getHeroGenerator();
    let esElFinal = false;
    do{
        const {value, done} = await heroGenerator.next();
        esElFinal = done;

        //!Con este IF no muestra el ultimo valor que tiene el done en TRUE
        //if(esElFinal) break;

        console.log({value, done})

        element.innerHTML = value;

    }while(!esElFinal)
}

async function* getHeroGenerator(){
    for(const hero of heroes){
        //!El await sleep lo que hace es esperar 1 segundo entre cada nombre que traiga
        await sleep();
        yield hero.name;
    }

    return 'No hay mas';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}

