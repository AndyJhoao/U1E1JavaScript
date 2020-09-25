const archivo = require('fs');

archivo.readFile('texto.txt', 'utf-8',(error,data)=> {
    if(error) console.log(error);
    else comparar(data.split(' '));
});

function comparar(data){
    const palabra = ['El','niño','juega','con','su','pelota']; //Palabra escrita correctamente
    let respuesta=[];
    console.log("Archivo de Texto = "+data);

    for(let i=0; i<palabra.length; i++){
        for(let j=0; j<palabra.length; j++){

            if(data[i] === palabra[j])
            {
                respuesta[j] = data[i];
                //console.log(respuesta); Descomentar esta linea de código para ver como va acomodando.
            }
        }
    }
    console.log(respuesta);
}