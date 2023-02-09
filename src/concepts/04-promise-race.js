
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) =>{
    console.log('promiseRaceComponent');

    element.innerHTML = 'Loading...';
    const renderValue = (valor) => {
        element.innerHTML = valor;

    }

    //renderValue('Leandro')
//solamente resuelve la mas rapida pero 1 sola
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
    ]).then(renderValue);
}


const slowPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 3500);
})

const fastPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 3000);
})

