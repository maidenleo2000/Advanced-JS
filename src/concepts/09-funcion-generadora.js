
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) =>{
    console.log('generatorFunctionComponent');

    const myGenerator = myFirstGeneratorFunction();

    //!Con NEXT pido el siguiente valor que al ejecutarse seria el primer yield
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    //!Si se sigue llamando despues del return va a devolver UNDEFINED con el valor DONE en true


    //!De esta forma genero IDs infinitos cada vez que la llamo para no usar UUID por ejemplo
    const genId = idGenerator();
    // console.log(genId.next());
    // console.log(genId.next());
    
    //creo un boton para incrementar los IDs
    const button = document.createElement('button');
    button.innerText = 'Incrementar ID';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton)

}


function* idGenerator(){
    let currentId = 0;
    while(true){
        //!Si pongo el ++ al final el primer valor es 0, pero si lo pongo al comienzo el primer valor es 1
        yield ++currentId;
    }
}



function* myFirstGeneratorFunction(){

    //!El yield es como un return pero queda pausado
    yield 'Primer Valor';
    yield 'Segundo Valor';
    yield 'Tercer Valor';
    yield 'Cuarto Valor';

    //En el momento que se llama el return es cuando no hay mas valores, por eso no se ejecutan los posteriores yield
    return 'Ya no hay valores';
    yield 'Ya no se puede hacer nada despues de un return';

}

