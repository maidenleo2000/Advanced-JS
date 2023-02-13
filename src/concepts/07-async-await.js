
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async(element) =>{
    console.log('asyncAwait2Component');
    console.time('Comienzo');

    //!Si las promesas son independientes no tiene sentido usarlo asi
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    //!Si son independientes se resuelve con el PROMISE.ALL para que no me relentice la app, y en vez de tardar 4.5s va a demorar 2s todo
    //DESESTRUCTURACION
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        valor1: ${value1} <br>
        valor2: ${value2} <br>
        valor3: ${value3} <br>
    `

    console.timeEnd('Comienzo');
}



const slowPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
})

const fastPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
})
